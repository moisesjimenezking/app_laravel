<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function store(Request $request)
    {
        try {
            $user = User::create([
                'firstName'             => $request->input('firstName'),
                'otherName'             => $request->input('otherName'),
                'surname'               => $request->input('surname'),
                'secondSurname'         => $request->input('secondSurname'),
                'identificationType'    => $request->input('identificationType'),
                'identificationNumber'  => $request->input('identificationNumber'),
                'country'               => $request->input('country'),
                'area'                  => $request->input('area'),
                'admissionDate'         => $request->input('admissionDate')
            ]);
            
            # CREATE EMAIL
            $surnames = $user->surname."".$user->secondSurname;
            $surnames = str_replace(' ', '', trim($surnames));
            $domain   = strtoupper($user->country) == "COLOMBIA" 
                ? "global.com.co"
                : "global.com.us";

            $email = $user->firstName.".".$surnames.".".$user->id."@".$domain;

            $user = User::updateOrCreate(
                ['id'    => $user->id],
                ['email' => $email]
            );
        } catch (\Exception $e){
            return response()->json(
                (object)[
                    "error" => (object)[
                        'internalError' => "error: ".$e, 
                        'message'       => "Error al registrar el usuario"
                    ],
                    'message' => "Error al registrar el usuario"
                ],
                404
            );
        }

        return response()->json($user, 201);
    }

    public function index(Request $request)
    {
        $limit = $request->input('limit', 10);
        $page = $request->input('page', 1);

        $query = User::query();
        $query = $request->has('firstName') 
            ? $query->where('firstName', 'like', '%'.$request->input('firstName').'%') 
            : $query;

        $query = $request->has('otherName') 
            ? $query->where('otherName', 'like', '%'.$request->input('otherName').'%') 
            : $query;

        $query = $request->has('surname') 
            ? $query->where('surname', 'like', '%'.$request->input('surname').'%') 
            : $query;

        $query = $request->has('secondSurname') 
            ? $query->where('secondSurname', 'like', '%'.$request->input('secondSurname').'%') 
            : $query;

        $query = $request->has('identificationNumber') 
            ? $query->where('identificationNumber', 'like', '%'.$request->input('identificationNumber').'%') 
            : $query;

        $query = $request->has('email') 
            ? $query->where('email', 'like', '%'.$request->input('email').'%') 
            : $query;

        $query = $request->has('identificationType') 
            ? $query->where('identificationType', $request->input('identificationType')) 
            : $query;

        $query = $request->has('country') 
            ? $query->where('country', $request->input('country')) 
            : $query;

        $users = $query->paginate($limit, ['*'], 'page', $page);

        return response()->json($users);
    }

    public function destroy(Request $request)
    {   
        if($request->has('id')){
            $user = User::find($request->input('id'));
            if ($user) {
                $user->delete();
                return response()->json(['message' => 'Usuario eliminado correctamente'], 200);
            } else {
                return response()->json(
                    (object)[
                        "error" => (object)[
                            'internalError' => "error", 
                            'message'       => "Error al registrar el usuario"
                        ],
                        'message' => "Error al registrar el usuario"
                    ],
                    404
                );
            }
        } else {
            return response()->json(                    
                (object)[
                    "error" => (object)[
                        'internalError' => "error", 
                        'message'       => "Error al registrar el usuario"
                    ],
                    'message' => "Error al registrar el usuario"
                ],
                404
            );
        }
        


    }
}
