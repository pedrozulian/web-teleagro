import { Component, Input, OnInit } from '@angular/core';
import { Publicacao } from 'src/app/shared/models/publicacao.model';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
  @Input() publicacao: Publicacao;

  constructor() { }

  ngOnInit(): void {
  }

}
