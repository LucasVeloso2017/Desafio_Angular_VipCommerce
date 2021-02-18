import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from'./views/home/home.component'
import { ProductCrudComponent} from './views/product-crud/product-crud.component'
import {ProductCreateComponent} from './components/product/product-create/product-create.component'
import {ProductDeleteComponent} from './components/product/product-delete/product-delete.component'
import {ProductUpdateComponent} from './components/product/product-update/product-update.component'
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { ClientDeleteComponent } from './components/clients/client-delete/client-delete.component';
import { ClientUpdateComponent } from './components/clients/client-update/client-update.component';


const routes: Routes = [{
  path:"",
  component: HomeComponent
},{ 
  path:"products",
  component: ProductCrudComponent
},{ 
  path:"products/create",
  component: ProductCreateComponent
},
{
  path: "products/update/:id",
  component: ProductUpdateComponent
},
{
  path: "products/delete/:id",
  component: ProductDeleteComponent
},{ 
  path:"clients",
  component: ClientCrudComponent
},{ 
  path:"clients/create",
  component: ClientCreateComponent
},
{
  path: "clients/delete/:id",
  component: ClientDeleteComponent
},
{
  path: "clients/update/:id",
  component: ClientUpdateComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
