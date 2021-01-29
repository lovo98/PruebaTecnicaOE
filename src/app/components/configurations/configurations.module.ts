import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// module
import { ConfigurationsRoutingModule } from './configurations-routing.module';

// components
import { ClientesComponent } from './../clientes/clientes.component';
import { HomeComponent } from './../home/home.component';
import { OrdenComponent } from './../orden/orden.component';
import { OrdenesComponent } from './../ordenes/ordenes.component';
import { ProductosComponent } from './../productos/productos.component';

@NgModule({
  declarations: [
    ClientesComponent,
    HomeComponent,
    OrdenComponent,
    OrdenesComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ClientesComponent,
    HomeComponent,
    OrdenComponent,
    OrdenesComponent,
    ProductosComponent,
  ]
})
export class ConfigurationsModule { }
