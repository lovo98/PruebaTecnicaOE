import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './../home/home.component';
import { OrdenComponent } from './../orden/orden.component';
import { OrdenesComponent } from './../ordenes/ordenes.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clientes",
    loadChildren: () => import("../clientes/configurations/configurations.module").then(m => m.ConfigurationsModule)
  },
  {
    path: "productos",
    loadChildren: () => import("../productos/configurations/configurations.module").then(m => m.ConfigurationsModule)
  },
  {
    path: "crear-orden",
    component: OrdenComponent
  },
  {
    path: "ordenes",
    component: OrdenesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationsRoutingModule { }
