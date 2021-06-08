import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Publicacao } from 'src/app/shared/models/publicacao.model';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class PublicacoesService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }

  salvarPublicacao(publicacao: Publicacao) {
    return this.http.post(`${this.utils.apiUrl}/publicacoes`, publicacao);
  }

  getPublicacoesUsuario(id_usuario) {
    return this.http.get(`${this.utils.apiUrl}/publicacoes/usuario/${id_usuario}`)
      .pipe(map((publicacoes: Publicacao[]) => publicacoes.map(p => new Publicacao().deserialize(p))));
  }

  getTodasPublicacoes() {
    return this.http.get(`${this.utils.apiUrl}/publicacoes/todas`)
      .pipe(map((publicacoes: Publicacao[]) => publicacoes.map(p => new Publicacao().deserialize(p))));
  }


}
