import { Component, OnInit } from '@angular/core';

import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price'];
  products!: Product[]
// para injetando o product.service - declarando ele no constructor
  constructor(private productService: ProductService) { }

  // a lista de produto só vai ser chamada após receber a responta do backend no service
  //para fazer a chamada do backend para a lista de produtos primeiro eu vou injetar o produto service dentro desse componente
  // agente injeta declarando ele no constructor
  ngOnInit(): void {
    // depois de injetado ele retorna a resposta do backend ... declaramos
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }


}

/**
 * na incializaçao deste componente ele vai chamar o nosso produtor service
 * vai obter os produtos vai alterar a variavel do começo e vai logar no console pra ver se esta tudo funcionando
 */