import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllVehiculosService {
  private apiUrl = 'https://crud-angular-springboot-production.up.railway.app/api/vehiculos'; 

  constructor(private http: HttpClient) { }

  obtenerDatosPaginados(pageNumber: number, pageSize: number): Observable<any> {
    let params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());

    return this.http.get(this.apiUrl, { params: params });
  }
}
