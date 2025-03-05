import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = environment.backendURL;

  constructor(private http: HttpClient) {}

  getAllUsers(limit: number, offset: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}users/getAllUsers?limit=${limit}&offset=${offset}`);
  }  
}
