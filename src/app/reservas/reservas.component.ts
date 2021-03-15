import { Component, OnInit } from '@angular/core';
import {Reserva} from './reserva.model';
import{ProductsService}from '../products.service';
import {HttpClient}from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
reservas: Reserva[]=[];
  constructor(  
    private route: ActivatedRoute,
    private productsService: ProductsService,   
    private httpClient: HttpClient,
  
      ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=>{
      const id= param.id;
      console.log(id);
    this.fetchReservas(id);
 
    });
    
  }
  fetchReservas(idtienda:number){
    //recibe con el subscribe
    this.productsService.getReservas(idtienda).subscribe(
      reservas=>{
        console.log(reservas);
        this.reservas=reservas;
      }
    )
  }

}
