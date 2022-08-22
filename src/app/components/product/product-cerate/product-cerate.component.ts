import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-cerate',
  templateUrl: './product-cerate.component.html',
  styleUrls: ['./product-cerate.component.css']
})
export class ProductCerateComponent implements OnInit {
// colocou que eh do tipo Product só para o typescript validar os parametos nao eh obrigatorio o tipo Produtct
  product: Product= {
    name: '',
    price: Number(null)
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => { // so qndo recebe a resposta mostra a mensagem
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products']) // depois entra na tela q mostra o cadastro como todo
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
