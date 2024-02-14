import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:8090/user/login', user);
  }

  register(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:8090/user/register', user);
  }
}
