import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PublicacoesService } from 'src/app/core/services/publicacoes.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { PerfilUsuario } from 'src/app/shared/models/perfil-usuario.model';
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
  usuario: PerfilUsuario;
  idUsuario: number;

  constructor(
    private publicacoesService: PublicacoesService,
    private formBuilder: FormBuilder,
    private utils: UtilsService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {
    this.criarForm();
    this.carregarDadosPessoais();
    this.carregarPublicacoes();
  }

  criarForm() {
    this.form = this.formBuilder.group({
      texto: ['']
    });
  }

  carregarDadosPessoais() {
    const usuario = this.utils.usuarioAtual();
    this.idUsuario = usuario.id_usuario;
    this.usuariosService.perfil(this.idUsuario).subscribe(data => {
      this.usuario = data[0];
    });
  }

  salvarPublicacao() {
    const publi = { id_usuario: this.idUsuario, id_tipo_imagem: 2, url: this.urlImagem, texto: this.form.get('texto').value };
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
  }

  carregarPublicacoes() {
    this.publicacoesService.getTodasPublicacoes()
      .subscribe(data => this.publicacoes = data);
  }
}
