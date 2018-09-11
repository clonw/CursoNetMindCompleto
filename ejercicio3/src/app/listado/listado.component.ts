import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  listado;
  elemento;
  constructor() {
    this.elemento = {text: ''};
  }

  ngOnInit() {

    this.listado = [
      {text: 'hacer la compra'},
      {text: 'revisar el coche'}
      ];
  }

  addTodo() {
    const miElemento = { text: this.elemento.text};
    this.elemento = {text: ''};
    this.listado.push(miElemento);
  }
}
