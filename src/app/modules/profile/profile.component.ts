import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { PerfilUsuario } from 'src/app/shared/models/perfilUsuario.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private usuariosService: UsuariosService,
    private utils: UtilsService
  ) { }

  usuario: PerfilUsuario;

  ngOnInit(): void {
    const usuario = this.utils.usuarioAtual();
    this.usuariosService.perfil(usuario.id_usuario).subscribe(data => {
      this.usuario = data[0];
      console.log(this.usuario);
    });
  }

}
