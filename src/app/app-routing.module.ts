import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

// components
import { Routes, RouterModule } from '@angular/router';

// components

const routes: Routes = [
  {
    path: "mi-tienda",
    loadChildren: () => import('./components/configurations/configurations.module').then(m => m.ConfigurationsModule)
  },
  {
    path: "**", redirectTo: "mi-tienda"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
