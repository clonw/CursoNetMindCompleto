import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
listado: string[] = ['una cosa', 'cosa dos', 'cosa tres'];
  constructor() { }

  ngOnInit() {
  }

}
