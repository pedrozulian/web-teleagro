import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalidadesService } from 'src/app/core/services/localidades.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { UF } from 'src/app/shared/models/uf.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private localidades: LocalidadesService,
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) { }

  estados: UF[];
  form: FormGroup;

  ngOnInit() {
    this.getUfs();
    this.criarForm();
  }

  getUfs() {
    this.localidades
      .getUfs()
        .subscribe(data => this.estados = data);
  }

  cadastrar() {
    if (this.form.valid) {
      console.log('cadastrar: ', this.form.value);
      this.usuariosService
        .cadastrar(this.form.value)
        .toPromise()
        .then((data: { resultado: {mensagem: string, nome: string, email: string }}) => { console.log(data.resultado.mensagem) })
        .catch(error => console.error(error));
    }
  }

  private criarForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      nome_usuario: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
    });
  }


}
