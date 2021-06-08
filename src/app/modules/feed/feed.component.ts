import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PublicacoesService } from 'src/app/core/services/publicacoes.service';
import { Publicacao } from 'src/app/shared/models/publicacao.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  imagemCarregada = false;
  urlImagem: string;
  publicacoes: Publicacao[];
  form: FormGroup;

  constructor(
    private publicacoesService: PublicacoesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.criarForm();
    this.carregarPublicacoes();
  }

  criarForm() {
    this.form = this.formBuilder.group({
      texto: ['']
    });
  }

  salvarPublicacao() {
    console.log('aaa');
    const publi = { id_usuario: 1, id_tipo_imagem: 2, url: this.urlImagem, texto: this.form.get('texto').value };
    const publicacao = new Publicacao().deserialize(publi);
    this.publicacoesService
      .salvarPublicacao(publicacao)
        .subscribe(() => {
          this.carregarPublicacoes();
          this.imagemCarregada = false;
          this.form.reset();
        });
  }

  processImage(event) {
    this.imagemCarregada = true;
    this.urlImagem = event.target.files[0].name;
    // const publicacao = new Publicacao();
    // publicacao.url = file.name;
    // publicacao.id_tipo_imagem = 2;
    // this.publicacoesService.salvarPublicacao(publicacao);
  }

  carregarPublicacoes() {
    this.publicacoesService.getTodasPublicacoes()
      .subscribe(data => this.publicacoes = data);
  }
}
