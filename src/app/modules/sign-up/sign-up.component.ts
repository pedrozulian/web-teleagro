import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalidadesService } from 'src/app/core/services/localidades.service';
import { UF } from 'src/app/shared/models/uf.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private localidades: LocalidadesService,
    private formBuilder: FormBuilder
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

  cadastrar() {}

  private criarForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      cidade: ['', Validators.required],
      uf: ['', Validators.required],
    });
  }


}
