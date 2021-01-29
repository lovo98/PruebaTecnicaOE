import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { ProductosService } from './../../../services/productos.service';

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

  constructor(private activedRoute: ActivatedRoute, private productoService: ProductosService) {
    this.activedRoute.params.subscribe((params) => {
      this.id = params.productoId;
    })

    this.productoService.detallesById(this.id).subscribe((res) => {
      this.data = res;
    }, (err) =>{
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
