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
}
