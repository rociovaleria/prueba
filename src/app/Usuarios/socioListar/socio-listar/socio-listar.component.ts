import { Component, OnInit } from '@angular/core';
import{UserSocio} from '../../add-usuario/user.model'
import{ProductsService}from '../../../products.service';

@Component({
  selector: 'app-socio-listar',
  templateUrl: './socio-listar.component.html',
  styleUrls: ['./socio-listar.component.scss']
})
export class SocioListarComponent implements OnInit {
 
  socios : UserSocio[]=[]

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchSocios();
  }
  fetchSocios(){
    //recibe con el subscribe
    this.productsService.getAllSocios().subscribe(
      socios=>{
        console.log(socios);
        this.socios=socios;
      }
    )
  }
}
