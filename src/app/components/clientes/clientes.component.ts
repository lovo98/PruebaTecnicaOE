import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// service
import { ServicesClientesService } from 'src/app/services/services-clientes.service';

// alertas
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public list: any;

  constructor(private clienteService: ServicesClientesService, private router: Router) {
    this.list = [];
    this.listadoClientes();
  }

  ngOnInit(): void {
  }

  listadoClientes() {
    this.clienteService.listaClientes().subscribe(res => {
      this.list = res;
    },
      (err) => {
        Swal.fire({
          icon: 'error',
          title: '..Oops!',
          text: 'Ocurrió un error al conectarse con el servidor.'
        })
    })
  }

  verDetalles(ruta: string, id: string) {
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
        this.clienteService.eliminarCliente(id).subscribe((res) => {
          Swal.fire(
            'Registro eliminado',
            'El registro se elimino exitosamente',
            'success'
          )
          this.listadoClientes();
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
