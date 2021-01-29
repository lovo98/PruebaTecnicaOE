import { ServicesClientesService } from 'src/app/services/services-clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// alertas
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  public data: any;
  private id: string;

  constructor(private clienteService: ServicesClientesService, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(params => {
      this.id = params.clienteId;
    })

    this.clienteService.detalleById(this.id).subscribe(res => {
      this.data = res;
    }, (err) => {
      Swal.fire({
        icon: 'warning',
        title: 'Alerta',
        text: 'Hubo un error al mostrar el registro.'
      })
    })
  }

  ngOnInit(): void {

  }

}
