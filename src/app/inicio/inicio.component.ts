import { FrameworkService } from './../framework.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  frameworks:Array<any>[];

  constructor(private _servicio:FrameworkService) { 
    this.frameworks=_servicio.devuelveFramework();
  } // llamada ctor clase servicio.

  ngOnInit(): void {
  }

}
