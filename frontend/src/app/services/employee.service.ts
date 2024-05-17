import { HttpProvider } from '@/global/http.const';
import { APIResponceCreatedEmployee, APIResponseModel } from '@/models/api_response.model';
import { EmployeeModel } from '@/models/employee.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }


  getEmployees(params?: any): Observable<APIResponseModel<EmployeeModel[]>> {

    return this._httpClient.get<APIResponseModel<EmployeeModel[]>>(
      `${HttpProvider.apiUri}`
      , {
        params
      });
  }

  createEmployee(params: any): Observable<APIResponceCreatedEmployee> {

    return this._httpClient.post<APIResponceCreatedEmployee>(
      `${HttpProvider.apiUri}register`
      , params);
  }


  deleteEmployee(id: number): Observable<any> {

    return this._httpClient.delete<any>(
      `${HttpProvider.apiUri}users`
      , { body: { id } });
  }
}
