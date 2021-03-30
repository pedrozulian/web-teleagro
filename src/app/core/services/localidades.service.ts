import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UF } from 'src/app/shared/models/uf.model';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {

  constructor(
    private http: HttpClient
  ) { }

  public getUfs() {
    return this.http
            .get<UF[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .pipe(
              map((estados: UF[]) => estados.map(uf => new UF().deserialize(uf))
              )
            )
  }
}
