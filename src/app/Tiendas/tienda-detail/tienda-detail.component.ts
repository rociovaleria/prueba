import { Component, OnInit } from '@angular/core';
import{ProductsService}from '../../products.service';
import { ActivatedRoute, Params } from '@angular/router';
import {HttpClient}from '@angular/common/http';
import { Tienda } from '../tienda/tienda.model';

@Component({
  selector: 'app-tienda-detail',
  templateUrl: './tienda-detail.component.html',
  styleUrls: ['./tienda-detail.component.scss']
})
export class TiendaDetailComponent implements OnInit {
   tienda: Tienda[]=[];

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
   

   
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {
   /* this.route.params.subscribe((param: Params)=>{
      const id= param.id;
      const id3=3;
    this.fetchMiTienda(id3);
    });*/
    const id3=3;
    this.fetchMiTienda(id3);
  }
  
  fetchMiTienda(id:number){
    //recibe con el subscribe
    this.productsService.getMiTienda(id).subscribe(
      tiendaResponse=>{
        console.log(tiendaResponse);
      this.tienda=tiendaResponse;
      }
    )
  }

}
