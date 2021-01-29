import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { AgregarComponent } from './../agregar/agregar.component';
import { ClientesComponent } from './../clientes.component';
import { MostrarComponent } from './../mostrar/mostrar.component';

const routes: Routes = [

  {
    path: "",
    children: [
      {
        path: '', component: ClientesComponent
      },
      {
        path: 'agregar', component: AgregarComponent
      },
      {
        path: 'mostrar/:clienteId', component: MostrarComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
