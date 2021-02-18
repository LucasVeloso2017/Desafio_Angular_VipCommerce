import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import{ HttpClientModule} from '@angular/common/http'
import{ FormsModule} from '@angular/forms'


import{ MatFormFieldModule} from '@angular/material/form-field'
import{ MatInputModule} from '@angular/material/input'
import{ MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from'@angular/material/sidenav'
import { MatListModule } from'@angular/material/list'
import { MatCardModule } from'@angular/material/card'
import { MatButtonModule } from'@angular/material/button'
import { MatSnackBarModule } from'@angular/material/snack-bar'


import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ClientCrudComponent } from './views/client-crud/client-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ClientCreateComponent } from './components/clients/client-create/client-create.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ClientReadComponent } from './components/clients/client-read/client-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ClientDeleteComponent } from './components/clients/client-delete/client-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import {ClientUpdateComponent} from './components/clients/client-update/client-update.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ClientCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    ProductDeleteComponent,
    ProductUpdateComponent,
    ClientCreateComponent,
    ClientReadComponent,
    ClientDeleteComponent,
    ClientUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
