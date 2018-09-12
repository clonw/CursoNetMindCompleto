import { Component, OnInit } from '@angular/core';

import { Persona} from '../modelo/persona';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  sexos: string[] = ['Hombre', 'Mujer', 'Otros'];
  orientaciones: string[] = ['Hetero', 'Gay', 'Lesbiana', 'Otros'];
  relaciones: string[] = ['Amistad', 'Relación estable', 'Ir al bar', 'Otros'];
  submitted: boolean;
  model: Persona;
  personas: Persona[] = [];
  constructor() {
    this.model = new Persona('', '', '', '', '', '', '', false);
    this.submitted = false;
  }

  ngOnInit() {
  }

  submit() {
    this.personas.push( this.model);
  }
}
