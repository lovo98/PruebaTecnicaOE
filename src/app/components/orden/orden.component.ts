import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// custom validators
import { CustomValidators } from './../../utils/customValidators';

// services
import { ServicesClientesService } from 'src/app/services/services-clientes.service';
import { OrdenService } from './../../services/orden.service';
import { ProductosService } from './../../services/productos.service';

// sweetAlert
import Swal from 'sweetalert2'

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  public clientes: any;
  public productos: any;
  public load: boolean;
  public messageError: boolean;

  createFormGroup() {
    return new FormGroup({
      idProducto: new FormControl('', [Validators.required]),
      idCliente: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      cantidad: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required])
    })
  }

  formOrden: FormGroup;

  constructor(private cltService: ServicesClientesService, private ordenService: OrdenService, private pdtService: ProductosService) {
    this.load = false;
    this.formOrden = this.createFormGroup();

    this.cltService.listaClientes().subscribe((res) => {
      this.clientes = res;
    })

    this.pdtService.listaProductos().subscribe((res) => {
      this.productos = res;
    })
  }

  // métodos del formulario
  get idProducto() { return this.formOrden.get('idProducto') }
  get idCliente() { return this.formOrden.get('idCliente') }
  get id() { return this.formOrden.get('id') }
  get cantidad() { return this.formOrden.get('cantidad') }
  get fecha() { return this.formOrden.get('fecha') }

  ngOnInit(): void {
  }

  realizarOrden() {
    this.load = true;
    if (this.formOrden.valid) {
      this.messageError = false;
      this.ordenService.nuevaOrden(this.formOrden.value).subscribe((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro Guardado',
          text: 'Registro guardado exitosamente'
        })
        this.load = false;
        this.formOrden.reset();
      }, (err) => {
        Swal.fire({
          icon: 'warning',
          title: 'Alerta',
          text: 'Hubo un error al guardar el registro.'
        })
        this.load = false;
      })
    } else {
      this.messageError = true;
      this.load = false;
    }
  }

}
