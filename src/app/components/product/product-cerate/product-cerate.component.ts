import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-cerate',
  templateUrl: './product-cerate.component.html',
  styleUrls: ['./product-cerate.component.css']
})
export class ProductCerateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.showMessage('Produto criado!')
  }
  
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
