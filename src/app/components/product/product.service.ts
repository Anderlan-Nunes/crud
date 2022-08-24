import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseAPIUrl= "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product>(this.baseAPIUrl, product)
  }

  read(): Observable<Product[]> { // retorna uma lista de produto da api metodo eh consumido dentro product-read
    return this.http.get<Product[]>(this.baseAPIUrl)

  }
//nao precisa ser number pq vem da url
  readyById(id: string): Observable<Product> {
    const url = `${this.baseAPIUrl}/${id}`;
    return this.http.get<Product>(url)
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseAPIUrl}/${product.id}`;
    return this.http.put<Product>(url, product)
  }
}
