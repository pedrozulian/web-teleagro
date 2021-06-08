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

  salvarImagem(imagem) {
    const urlImagem = '/home/pedro/Pictures' + imagem.name;
  }

  publicacoesUsuario(id_usuario) {
    return this.http.get(`${this.utils.apiUrl}/publicacoes/${id_usuario}`)
      .pipe(map((publicacoes: Publicacao[]) => publicacoes.map(publicacao => new Publicacao().deserialize(publicacao))));
  }
}
