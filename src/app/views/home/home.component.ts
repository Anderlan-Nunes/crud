import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) { 
    // por nao ser um atributo e sim método get/set uma propriedade eu posso atribuir um para headerData um objeto
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }

  }

  ngOnInit(): void {
  }

}
