import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private utils: UtilsService,
    private router: Router
  ) { }

  form: FormGroup;

  ngOnInit(): void {
    this.criarForm();
  }

  criarForm() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      senha: [null, Validators.required]
    });
  }

  login(): void {
    console.log(this.form.value);
    if (this.form.valid) {
      this.usuariosService
        .login(this.form.value)
        .subscribe(data => {
          if (data.token) {
            localStorage.setItem('usuarioAtual', JSON.stringify({
              nome: data.nome,
              id_usuario: data.id_usuario,
              token: data.token,
            }));
            this.router.navigate(['feed']);
          }
        });
    }
  }

}
