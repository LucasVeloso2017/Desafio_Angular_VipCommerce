import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor(private router:Router,private HeaderService:HeaderService){
    HeaderService.headerData = {
      title: 'Cadastro de Clientes',
      icon:'person',
      routeUrl:'/clients'
    }
  }

  navigateToProductCreate(){
    this.router.navigate(['/clients/create'])
  }

  ngOnInit(): void {
  }

}
