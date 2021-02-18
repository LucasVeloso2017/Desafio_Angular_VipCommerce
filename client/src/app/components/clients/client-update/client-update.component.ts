import { ClientService } from './../client.service';
import { Client } from '../client.model';
import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  constructor( 
    private ClientService: ClientService, 
    private router:Router, 
    private route: ActivatedRoute
  ) { }

  clients:Client = {
    nome:'',
    email:'',
    cpf:'',
    sexo:''
  }
    
  sexo = [
    {value: 'Masculino',viewValue:'Masculino'},
    {value: 'Feminino',viewValue:'Feminino'}
  ];
  validateEmail(email:string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validateCpf(cpf:string) {
    const re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    return re.test(String(cpf).toLowerCase());
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ClientService.readById(id).subscribe((client) => {
      this.clients.nome = client.nome
      this.clients.sexo = client.sexo
      this.clients.cpf = client.cpf
      this.clients.email = client.email
      this.clients.id = client.id
    });
  
  }

  updateProduct(){
    if(!this.validateEmail(this.clients.email)){
      this.ClientService.showMessage(`Favor inserir um e-mail valido`,true)
      return
    }
    if(!this.validateCpf(this.clients.cpf)){
      this.ClientService.showMessage(`Favor inserir um cpf valido`,true)
      return
    }
    this.ClientService.update(this.clients).subscribe(() => {
      this.ClientService.showMessage("Cliente atualizado com sucesso!");
      this.router.navigate(["/clients"]);
    });
  }
  cancelProduct(){
    this.router.navigate(['/clients']);
  }

}
