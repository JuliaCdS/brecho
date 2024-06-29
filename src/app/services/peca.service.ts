import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  private apiUrl = 'http://localhost:3000'; // Substitua pelo seu URL da API

  constructor(private http: HttpClient) { }

  getAllPecas(): Observable<any[]> {
    console.log('Enviando solicitação para obter todas as peças...');
    return this.http.get<any[]>(`${this.apiUrl}/api/pecas`).pipe(
      catchError(this.handleError)
    );
  }

  getPecaById(id: string): Observable<any> {
    console.log(`Enviando solicitação para obter peça com ID ${id}...`);
    return this.http.get<any>(`${this.apiUrl}/api/pecas/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro ao fazer solicitação HTTP:', error);
    return throwError(error);
  }
}
