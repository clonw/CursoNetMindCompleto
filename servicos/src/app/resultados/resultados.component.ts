import { Component, OnInit } from '@angular/core';
import {Resultado} from '../resultado';

import {ResultadosService} from '../resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  resultados ;
 constructor( private _resultadosService: ResultadosService) {


    // this.resultados = [new Resultado('PP', 0, 'chunga'),
    //                   new Resultado('PSOE', 0, 'chungaChunga')];
  }

  ngOnInit() {
    this.resultados = this._resultadosService.getData().toPromise();
  }
}
