import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: Number(null)
  }

  constructor(
    private productService: ProductService, // para acessar o banco de dados
    private router: Router, // acessar as rotas
    private route: ActivatedRoute // pegar o id da rota 
  ) { }

  // pegar o id
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // pega id da url
    this.productService.readyById(id!).subscribe(product => { // faz conexão com banco de dados e puxas os dados do produtos do bd
      this.product = product;
    })
  }

  deleteProduct(){
    this.productService.delete(`${this.product.id}`).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!'); // respota positiva do banco mostra a mensagem
      this.router.navigate(["/products"]); // depois navega para esta pagina de produtos
    })
   
  }

  cancel(){
    this.router.navigate(["/products"]);
  }

}

/**
 * poderia ter feito
 * const id = +this.route.snapshot.paramMap.get('id');
 * ai transformava a string em number em vez
 * this.productService.delete(`${this.product.id}`).subscribe(() => { ai ficava
 * this.productService.delete(this.product.id).subscribe(() => {
 * e no readyById tinha q ficar tbm readyById(id: number) ao inves de string
 */