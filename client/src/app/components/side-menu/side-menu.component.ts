import { Component, OnInit } from '@angular/core';

import { faUser,faBoxOpen,faCopyright } from '@fortawesome/free-solid-svg-icons';

interface dataProps{
  title:string
  icon:any
  link:string
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  faUser =  faUser
  faCopyright =  faCopyright
  faBoxOpen = faBoxOpen
  menuData:dataProps[] = [
    {
        title:"Clients",
        link:"/clients",
        icon:faUser
    },
    {
        title:"Produtos",
        link:"/products",
        icon:faBoxOpen
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
