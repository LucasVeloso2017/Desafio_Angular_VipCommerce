import { Client } from '../client.model';

import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  client: Client = {
    nome:'',
    cpf:'',
    email:'',
    sexo:''
  }
  sexo = [
    {value: 'Masculino',viewValue:'Masculino'},
    {value: 'Feminino',viewValue:'Feminino'}
  ];
  constructor(private ClientService:ClientService,private router:Router) { }
  
  ngOnInit(): void {

  }

  validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validateCpf(cpf:string) {
    const re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    return re.test(String(cpf).toLowerCase());
  }
  
  createProduct(){
    if(!this.validateEmail(this.client.email)){
      this.ClientService.showMessage(`Favor inserir um e-mail valido`,true)
      return
    }
    if(!this.validateCpf(this.client.cpf)){
      this.ClientService.showMessage(`Favor inserir um cpf valido`,true)
      return
    }

    this.ClientService.create(this.client).subscribe(() => {
      this.ClientService.showMessage(`Cliente ${this.client.nome} criado com sucesso!`)
      this.router.navigate(['/clients'])
    })
  }

  cancelProduct(){
    this.router.navigate(['/clients'])
  }

}
