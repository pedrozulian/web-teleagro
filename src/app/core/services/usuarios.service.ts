import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }

  cadastrar(form): Observable<any> {
    console.log('service: ', form);
    return this.http
            .post(`${this.utils.apiUrl}/usuarios/cadastro/`, form);
  }

  login(form): Observable<any> {
    return this.http.post(`${this.utils.apiUrl}/usuarios/login`, form);
  }
}
