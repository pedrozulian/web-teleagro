import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { LocalidadesService } from 'src/app/core/services/localidades.service';
import { UsuariosService } from 'src/app/core/services/usuarios.service';
import { ToastsService } from 'src/app/shared/components/toasts-global/toasts-global.service';
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
    private usuariosService: UsuariosService,
    public toastService: ToastsService
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

  cadastrar(f: NgForm): void {
    if (this.form.valid) {
      console.log('cadastrar: ', this.form.value);
      this.usuariosService
        .cadastrar(this.form.value)
        .toPromise()
        .then((data: { error: boolean, mensagem: string, email: string, status: number}) => {
          if (!data.error) {
            f.resetForm();
            this.showSucesso(data.mensagem);
          } else {
            this.showErro(data.mensagem);
          }
        })
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

  showSucesso(mensagem: string) {
    this.toastService.show(mensagem, { classname: 'bg-success text-light', delay: 2000 })
  }

  showErro(mensagem: string) {
    this.toastService.show(mensagem, { classname: 'bg-danger text-light', delay: 2000 })
  }

}
