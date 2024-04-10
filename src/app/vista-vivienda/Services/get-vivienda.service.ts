import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetViviendaService {
  private url: string  = 'https://crud-angular-springboot-production.up.railway.app/api/viviendas';

  constructor(private http: HttpClient) { }

  getVivienda(idVivienda: string): Observable<any> {
    const id_vivienda = parseInt(idVivienda)
    const queryUrl  = `${this.url}/${id_vivienda}`;

    const vivienda = this.http.get(queryUrl);
    return vivienda;
  }
}
