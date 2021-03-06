import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PerfilUsuario } from 'src/app/shared/models/perfil-usuario.model';
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

  perfil(idUsuario: number) {
    return this.http.get<PerfilUsuario[]>(`${this.utils.apiUrl}/usuarios/perfil/${idUsuario}`, this.utils.getHeader())
    .pipe(
      map((usuario: PerfilUsuario[]) => usuario.map(u => new PerfilUsuario().deserialize(u)))
    );
  }

  trocarFoto(idUsuario: number, foto: string) {
    return this.http.put(`${this.utils.apiUrl}/usuarios/${idUsuario}/trocar-foto`, { foto: foto}, this.utils.getHeader());
  }
}
