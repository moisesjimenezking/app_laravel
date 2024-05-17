import { HttpProvider } from '@/global/http.const';
import { APIResponseModel } from '@/models/api_response.model';
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


  getEmployees(params?: any): Observable<APIResponseModel<EmployeeModel>> {

    return this._httpClient.get<APIResponseModel<EmployeeModel>>(
      `${HttpProvider.apiUri}`
      , {
        params
      });
  }
}
