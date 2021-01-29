import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AgregarComponent } from './../agregar/agregar.component';
import { MostrarComponent } from './../mostrar/mostrar.component';
import { ProductosComponent } from './../productos.component';

const routes: Routes = [
  {
    path: "",
    component: ProductosComponent
  },
  {
    path: "",
    children: [
      {
        path: 'agregar', component: AgregarComponent
      },
      {
        path: 'mostrar/:productoId', component: MostrarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
