import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      map(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          return true;
        }
        return false;
      })
    );
  }

  register(nome: string, email: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/registro`, { nome, email, password }).pipe(
      map(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          return true;
        }
        return false;
      })
    );
  }
}
