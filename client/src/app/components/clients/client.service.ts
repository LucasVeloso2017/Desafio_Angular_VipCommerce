import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Client } from "./client.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  baseUrl = "http://localhost:3333/clientes";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(product: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, product).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl)
  }

  readById(id: string): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Client>(url);
  }

  update(product: Client): Observable<Client> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Client>(url, product)
  }

  delete(id: string): Observable<Client> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Client>(url)
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
