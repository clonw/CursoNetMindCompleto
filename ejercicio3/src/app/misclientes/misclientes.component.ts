import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {

clientes: Cliente[] = [];
  cliente: Cliente;
  constructor() {
    this.cliente = new Cliente( '', '');

    this.clientes = [
      new Cliente('Paco1', 'Liberbank1'),
      new Cliente('Paco2', 'Liberbank2')
      ];
  }

  ngOnInit() {
  }

  addCliente() {
    const nuevoCliente  = this.cliente;
    this.cliente = new Cliente('', '');

    this.clientes.push(nuevoCliente);
  }
}
