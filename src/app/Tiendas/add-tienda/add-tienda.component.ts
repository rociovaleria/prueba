import { Component, OnInit } from '@angular/core';
import { Tienda } from '../../Tiendas/tienda/tienda.model';
import { ActivatedRoute, Router,Params } from '@angular/router';
import {FormBuilder, FormGroup , Validator, Validators} from '@angular/forms';
import{ProductsService}from '../../products.service';

@Component({
  selector: 'app-add-tienda',
  templateUrl: './add-tienda.component.html',
  styleUrls: ['./add-tienda.component.scss']
})
export class AddTiendaComponent implements OnInit {
  //tiendas: Tienda[] = [];
  tienda:Tienda;
  form: FormGroup;
  id:number;
  constructor(
    private router: Router,
    //inyectar como dependencia 
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private fromBuilder: FormBuilder,
  ) { 
    this.buildForm();}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=>{
      const id= param.id;
      
    //this.capturarDato(id);
    this.id=id;
    console.log('este es el id+'+id);
    });
    
  }
  capturarDato(id:number){
  this.id=id;
  }
  saveTienda(event: Event ){
    //para evitar que el formulario recargue despues de mandar a guardar 
    event.preventDefault();
    //verificarr o asegurarnos que el formulario tiene los datos correctos 
    if(this.form.valid){
      const tienda=this.form.value;
      
      this.productsService.createTienda(tienda).subscribe((tiendaresponse)=>{
        console.log(tienda);
        console.log('respuesta');
        console.log(tiendaresponse);
        this.router.navigate(['./productos'])
      }
      )
    
    console.log("formvalue")
    console.log(this.form.value);
    }
  }
  private buildForm(){
    //form builder para hacer un formgrup
    this.form=this.fromBuilder.group({
      numero:['',[Validators.required]],
      nombre:['',[Validators.required]],
      direccion:['',[Validators.required]],
      socioId:['',[Validators.required]],
    
      
    });

  }

}
