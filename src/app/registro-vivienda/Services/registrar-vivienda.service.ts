import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarViviendaService {

  constructor(private http: HttpClient) { }

  postVivienda(data: any): Observable<any> {
    const url = `https://crud-angular-springboot-production.up.railway.app/api/crearvivienda/${data.municipio}/${data.propietario}`;
    return this.http.post(url, data);
  }
}
