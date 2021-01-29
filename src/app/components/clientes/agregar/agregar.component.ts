import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

// custom validators
import { CustomValidators } from './../../../utils/customValidators';

// services
import { ServicesClientesService } from 'src/app/services/services-clientes.service';

// alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, CustomValidators.allText]),
      apellidos: new FormControl('', [Validators.required, CustomValidators.allText])
    })
  }

  public load: boolean;
  public inputErr: boolean;

  clientesForm: FormGroup;
  constructor(private clienteService: ServicesClientesService) {
    this.clientesForm = this.createFormGroup();
    this.load = false;
    this.inputErr = false;
  }

  // métodos de formularios
  get id() { return this.clientesForm.get('id')}
  get nombre() { return this.clientesForm.get('nombre') }
  get apellidos () { return this.clientesForm.get('apellidos')}

  ngOnInit(): void {
  }

  agregarCliente() {
    this.load = true;
    if (this.clientesForm.valid) {
      this.inputErr = false;
      this.clienteService.agregarCliente(this.clientesForm.value).subscribe(res => {
        Swal.fire({
          icon: 'success',
          title: 'Registro Guardado',
          text: 'Registro guardado exitosamente.'
        })
        this.load = false;
        this.clientesForm.reset();
      }, (err) => {
        Swal.fire({
          icon: 'warning',
          title: 'Alerta',
          text: 'Hubo un error al guardar el registro.'
        })
        this.load = false;
      })
    } else {
      // console.log("faltan campos");
      this.load = false;
      this.inputErr = true;
    }
  }

}
