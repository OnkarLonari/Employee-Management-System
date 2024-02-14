import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService{
  token="eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJybUBnbWFpbC5jb20iLCJpYXQiOjE3MDc4NDQ1MTMsImV4cCI6MTcwNzkzMDkxM30.LEYUd8e54FOjdBTq5HV09TIEcjfxIZLmp0BuIA59rA7qeYQWbo5X1k5CfkLBoTBR";
  private baseURL = "http://localhost:8090/employee/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return this.httpClient.get<Employee[]>(`${this.baseURL}`, { headers });
    
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number,employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
