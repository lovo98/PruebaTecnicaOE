import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public contextPath: string;

  constructor(private http: HttpClient) {
    this.contextPath = 'http://localhost:3000/productos';
  }

  listaProductos() {
    return this.http.get(this.contextPath)
  }

  agregarProducto(value) {
    const body = value;
    return this.http.post(this.contextPath, body)
  }

  detallesById(id) {
    const params = new HttpParams().append("id", id);
    return this.http.get(this.contextPath, {params})
  }

  eliminarProducto(id) {
    return this.http.delete(this.contextPath + "/" +  id);
  }
}
