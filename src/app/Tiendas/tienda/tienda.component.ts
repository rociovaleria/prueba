import { Component, OnInit } from '@angular/core';
import { UserSocio } from '../../Usuarios/add-usuario/user.model';

import{ProductsService}from '../../products.service';
import {Tienda} from './tienda.model';


@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  tiendas: Tienda[] = [];
  id: number;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchTiendas();
  }
  fetchTiendas(){
    //recibe con el subscribe
    this.productsService.getAllTiendas().subscribe(
      tienda=>{
        console.log(tienda);
      
        this.tiendas=tienda;
      }
    )
  }

}
