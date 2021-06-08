import { Component, OnInit } from '@angular/core';
import { PublicacoesService } from 'src/app/core/services/publicacoes.service';
import { Publicacao } from 'src/app/shared/models/publicacao.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  imagemCarregada = false;
  publicacoes: Publicacao[];

  constructor(
    private publicacoesService: PublicacoesService
  ) { }

  ngOnInit(): void {
    this.carregarPublicacoes();
  }

  processImage(event) {
    const file = event.target.files[0]
    this.imagemCarregada = true;
    this.publicacoesService.salvarImagem(file);
  }

  carregarPublicacoes() {
    this.publicacoesService.getTodasPublicacoes()
      .subscribe(data => this.publicacoes = data);
  }
}
