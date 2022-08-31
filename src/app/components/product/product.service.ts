import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable, pipe } from 'rxjs';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseAPIUrl= "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] //os dois valores vem do css, qndo false monstra sucess
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseAPIUrl, product).pipe( // o pipe eh que caso aconteça um erro no meétodo post ele vai chamar o catchError
      map(obj =>obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  read(): Observable<Product[]> { // retorna uma lista de produto da api metodo eh consumido dentro product-read
    return this.http.get<Product[]>(this.baseAPIUrl).pipe(
      map(obj =>obj),
      catchError((e) => this.errorHandler(e))
    )

  }
//nao precisa ser number pq vem da url
  readyById(id: string): Observable<Product> {
    const url = `${this.baseAPIUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      map(obj =>obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseAPIUrl}/${product.id}`;
    return this.http.put<Product>(url, product).pipe(
      map(obj =>obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  delete(id: string) {
    const url = `${this.baseAPIUrl}/${id}`;
    return this.http.delete<Product>(url).pipe(
      map(obj =>obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
// podia ter criado esse codigo direto nos metodos mas por causa do tratamento do this foi melhor criar esse metodo
 // uma forma de garantir q vai usar o this de forma certa foi criar um aronfunciton e levar esse método ai da a garantia q o this vai apontar pra instacia da classe atual 
    
    this.showMessage("Ocorreu um erro!", true) 
    return EMPTY; // retorna um observable vazio observablou

}
}
