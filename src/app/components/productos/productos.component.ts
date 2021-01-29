import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// service
import { ProductosService } from './../../services/productos.service';

// alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public listado: any;

  constructor(private productoService: ProductosService, private router: Router) {
    this.listado = [];
    this.listadoProd();
  }

  ngOnInit(): void {
  }

  listadoProd() {
    this.productoService.listaProductos().subscribe((res) => {
      this.listado = res;
    })
  }

  verDetalles(ruta, id) {
    this.router.navigate([ruta, id])
  }

  eliminar(id) {
    Swal.fire({
      title: '¿Esta seguro de eliminar?',
      text: "El registro se eliminara permanentemente.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.eliminarProducto(id).subscribe((res) => {
          Swal.fire(
            'Registro eliminado',
            'El registro se elimino exitosamente',
            'success'
          )
          this.listadoProd();
        }, (err) => {
          Swal.fire(
            'Alerta',
            'Ocurrió un error al eliminar el registro',
            'warning'
          )
        })
      }
    })
  }
}
