import { Component, OnInit } from '@angular/core';
import { PublicacoesService } from 'src/app/core/services/publicacoes.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { PerfilUsuario } from 'src/app/shared/models/perfil-usuario.model';
import { Publicacao } from 'src/app/shared/models/publicacao.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private usuariosService: UsuariosService,
    private utils: UtilsService,
    private publicacoesService: PublicacoesService
  ) { }

  usuario: PerfilUsuario;
  idUsuario: number;
  publicacoes: Publicacao[];
  imagemCarregada: boolean = false;
  foto: string;

  ngOnInit(): void {
    this.carregarDadosPessoais();
    this.carregarPublicacoes();
  }

  carregarDadosPessoais() {
    const usuario = this.utils.usuarioAtual();
    this.idUsuario = usuario.id_usuario;
    this.usuariosService.perfil(this.idUsuario).subscribe(data => {
      this.usuario = data[0];
      console.log(this.usuario);
    });
  }

  carregarPublicacoes() {
    this.publicacoesService
      .getPublicacoesUsuario(this.idUsuario)
        .subscribe(data => this.publicacoes = data);
  }

  processImage(event) {
    this.foto = event.target.files[0].name;
    console.log(this.foto);
    this.usuariosService
      .trocarFoto(this.idUsuario, this.foto)
      .subscribe(() => window.location.reload());
  }

}
