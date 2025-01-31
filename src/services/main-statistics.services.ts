import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainStatisticsService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  getUsersStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getUserStatistics`);
  }
}