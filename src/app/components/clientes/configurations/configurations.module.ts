import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// module
import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { AgregarComponent } from '../agregar/agregar.component';
import { MostrarComponent } from './../mostrar/mostrar.component';


@NgModule({
  declarations: [
    AgregarComponent,
    MostrarComponent
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AgregarComponent,
    MostrarComponent
  ]
})
export class ConfigurationsModule { }
