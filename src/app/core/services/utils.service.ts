import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public apiUrl = environment.apiUrl;

  public usuarioAtual() {
    return JSON.parse(localStorage.getItem('usuarioAtual'));
  }

  public getToken() {
    const usuario = JSON.parse(localStorage.getItem('usuarioAtual'));
    return 'Bearer ' + (usuario ? usuario.token : '');
  }

  getHeader() {
    return {
      headers: new HttpHeaders({
        'Accept': 'aplication/json',
        'Authorization': this.getToken()
      })
    }
  }
}
