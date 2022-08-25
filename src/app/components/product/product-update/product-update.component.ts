import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product!: Product

  constructor(
    private productServie: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productServie.readyById(id!).subscribe(product => {
      this.product = product;
    })
  }

  updateProduct(): void {
    this.productServie.update(this.product).subscribe(() => {
      this.productServie.showMessage('Produto atualizado com sucesso!')
      this.router.navigate(["/products"]);
    })
  }

  cancel() {
    this.router.navigate(["/products"]);
  }

}