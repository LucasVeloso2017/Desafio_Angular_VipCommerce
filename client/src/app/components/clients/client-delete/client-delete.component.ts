import { Router, ActivatedRoute } from '@angular/router';
import { ClientService } from '../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';


@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css']
})
export class ClientDeleteComponent implements OnInit {

  constructor(
    private ClientService: ClientService, 
    private router:Router, 
    private route: ActivatedRoute
  ) { }

  client: Client 

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ClientService.readById(id).subscribe((client) => {
      this.client = client;
    });
  
  }

  deleteProduct(){
    const id = this.route.snapshot.paramMap.get('id');
    this.ClientService.delete(id).subscribe(() => {
      this.ClientService.showMessage("Cliente Deletado com sucesso!");
      this.router.navigate(["/clients"]);
    });
  }
  cancelProduct(){
    this.router.navigate(['/clients']);
  }


}
