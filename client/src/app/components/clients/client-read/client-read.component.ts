import {ClientService  } from './../client.service';
import { Client } from './../client.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients: Client[]
  displayedColumns = ['nome','email','cpf','sexo','action']

  constructor(private ClientService:ClientService) { }

  ngOnInit(): void {
    this.ClientService.read().subscribe(clients => {
      this.clients = clients
      console.log(clients)
    })
  }

}
