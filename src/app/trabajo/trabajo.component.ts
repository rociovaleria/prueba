import { Component, OnInit } from '@angular/core';
import{Trabajo} from '../trabajo/trabajo.model'

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss']
})
export class TrabajoComponent implements OnInit {
  trabajo: Trabajo={
    id:'1',
    lugar:'',
    referencia: '',
    telefono: 2222,
    longitud: '',
    latitud: '',
    direccion:'',
    
};


  constructor() { }

  ngOnInit(): void {
  }

}
