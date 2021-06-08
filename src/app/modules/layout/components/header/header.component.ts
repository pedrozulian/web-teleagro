import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private utils: UtilsService,
    private router: Router
  ) { }

  logado: boolean = false;

  ngOnInit(): void {
    const token = this.utils.getToken();
    this.logado = token.length > 9 ? true : false;
  }

  sair() {
    localStorage.removeItem('usuarioAtual');
    this.router.navigate(['sign-in']);
  }

}
