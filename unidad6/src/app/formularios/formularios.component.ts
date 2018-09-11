import { Component, OnInit } from '@angular/core';

import { Persona} from '../modelo/persona';
@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  sexos: string[] = ['Hombre', 'Mujer', 'Otros'];
  orientaciones: string[] = ['Hombre', 'Mujer', 'Otros'];

  model: Persona;
  constructor() {
    this.model = new Persona('', '', '', '', '', '', '', false);
  }

  ngOnInit() {
  }

  submit() {
  }
}
