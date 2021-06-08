import { Component, OnInit } from '@angular/core';
import { PublicacoesService } from 'src/app/core/services/publicacoes.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  imagemCarregada = false;

  constructor(
    private publicacoesService: PublicacoesService
  ) { }

  ngOnInit(): void {
  }

  processImage(event) {
    const file = event.target.files[0]
    this.imagemCarregada = true;
    this.publicacoesService.salvarImagem(file);
  }
}
