import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';

interface Request{
  nome:string
  email:string
  cpf:string
  sexo:string
}

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  serverUrl = 'http://localhost:3333'

  constructor(
    private http: HttpClient,
  ){ }

  getAllClients():Observable<Request[]>{
    return this.http.get<Request[]>(`${this.serverUrl}/clientes`)
    .pipe(
      tap(
        data => console.log(data),
        error => console.log(error)
      ),
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um Error', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
