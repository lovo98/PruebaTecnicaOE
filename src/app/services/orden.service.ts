import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  public contextPath: string;

  constructor(private http: HttpClient) {
    this.contextPath = 'http://localhost:3000/ordenes'
  }

  nuevaOrden(value) {
    const body = value;
    return this.http.post(this.contextPath, body);
  }

  allOrdens() {
    return this.http.get(this.contextPath);
  }

}
