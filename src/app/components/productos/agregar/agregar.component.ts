import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// services
import { ProductosService } from './../../../services/productos.service';

// sweetAlert
import Swal from 'sweetalert2'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required])
    })
  }

  formProductos: FormGroup;
  public load: boolean
  public errorInput: boolean;

  constructor(private productoService: ProductosService) {
    this.formProductos = this.createFormGroup();
    this.load = false;
    this.errorInput = false;
  }

  // métodos de formularios
  get id() { return this.formProductos.get('id')}
  get nombre() { return this.formProductos.get('nombre') }
  get descripcion() { return this.formProductos.get('descripcion') }
  get precio() {return this.formProductos.get('precio')}

  ngOnInit(): void {
  }

  agregarProducto() {
    this.load = true;
    if (this.formProductos.valid) {
      this.errorInput = false;
      this.productoService.agregarProducto(this.formProductos.value).subscribe((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro Guardado',
          text: 'Registro guardado exitosamente'
        })
        this.load = false;
        this.formProductos.reset();
      }, (err) => {
        Swal.fire({
          icon: 'warning',
          title: 'Alert',
          text: 'Hubo un error al guardar el registro.'
        })
        this.load = false;
      })
    } else {
      this.load = false;
      this.errorInput = true;
      // console.log("campos vacíos");
    }
  }

}
