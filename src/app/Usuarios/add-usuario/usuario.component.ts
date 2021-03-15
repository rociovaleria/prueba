import { Component, OnInit } from '@angular/core';
import { UserSocio } from './user.model';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormBuilder, FormGroup , Validator, Validators} from '@angular/forms';
import{ProductsService}from '../../products.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  socio:UserSocio;
  form: FormGroup;


  constructor(
    private route: Router,
    private productsService: ProductsService,
    private fromBuilder: FormBuilder,
  ) {

         this.buildForm();
   
   }

  ngOnInit(): void {
    
  }

  saveSocio(event: Event){
    //para evitar que el formulario recargue despues de mandar a guardar 
    event.preventDefault();
    //verificarr o asegurarnos que el formulario tiene los datos correctos 
    if(this.form.valid){
      const socio=this.form.value;
      this.productsService.createSocio(socio).subscribe((productoResponse)=>{
        console.log(socio);
        this.route.navigate(['./socios'])
      }
      )
    
    console.log("formvalue")
    console.log(this.form.value);
    }
  }
  private buildForm(){
    //form builder para hacer un formgrup
    this.form=this.fromBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      direccion:['',[Validators.required]],
      telefono:['',[Validators.required]],
      ci:['',[Validators.required]]
    });

  }
}
