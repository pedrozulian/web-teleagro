import { Component, OnInit } from '@angular/core';
import { LocalidadesService } from 'src/app/core/services/localidades.service';
import { UF } from 'src/app/shared/models/uf.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private localidades: LocalidadesService
  ) { }

  estados: UF[];

  ngOnInit() {
    this.getUfs();
  }

  getUfs() {
    this.localidades
      .getUfs()
        .subscribe(data => this.estados = data);
  }

}
