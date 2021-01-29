import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesClientesService {

  public contextPath: string;

  constructor(private http: HttpClient) {
    this.contextPath = 'http://localhost:3000/clientes';
  }

  listaClientes() {
    return this.http.get(this.contextPath);
  }

  agregarCliente(value) {
    const body = value
    return this.http.post(this.contextPath, body);
  }

  detalleById(id) {
    const params = new HttpParams().append('id', id);
    return this.http.get(this.contextPath, {params})
  }

  eliminarCliente(id) {
    return this.http.delete(this.contextPath + "/" +  id);
  }
}
