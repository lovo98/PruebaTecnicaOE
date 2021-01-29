import { Component, OnInit } from '@angular/core';

// services
import { OrdenService } from './../../services/orden.service';
import { ProductosService } from './../../services/productos.service';
import { ServicesClientesService } from 'src/app/services/services-clientes.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  public clientes: any;
  public ordenList: any;
  public productos: any;

  constructor(private ordenService: OrdenService, private clientS: ServicesClientesService, private productoS: ProductosService) {
    this.ordenList = [];
    this.productos = [];
    this.clientes = [];
    this.clientS.listaClientes().subscribe((res) => {
      this.clientes = res;
    })

    this.productoS.listaProductos().subscribe((res) => {
      this.productos = res;
    })

    this.ordenService.allOrdens().subscribe((res) => {
      this.ordenList = res;
      this.ordenList.forEach(element => {
        this.clientes.forEach(clienteE => {
          if (element.idCliente === clienteE.id) {
            element.idCliente = clienteE.nombre;
          }
        });

        this.productos.forEach(productoE => {
          if (element.idProducto === productoE.id) {
            element.idProducto = productoE.nombre;
          }
        });
      });
    })
  }

  ngOnInit(): void {
  }

}
