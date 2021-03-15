import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import {FormBuilder, FormGroup , Validator, Validators} from '@angular/forms';
import{LoginService}from '../login.service';
import {Login} from './../login/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;
  user: Login;
  constructor(
    private router: Router,
    //inyectar como dependencia 
    private route: ActivatedRoute,
    private loginService: LoginService,
    private fromBuilder: FormBuilder,
  ) { 
    this.buildForm();
  }
  Login(event: Event ){
    //para evitar que el formulario recargue despues de mandar a guardar 
    event.preventDefault();
    //verificarr o asegurarnos que el formulario tiene los datos correctos 
    if(this.form.valid){
      const user=this.form.value.username;
    
    console.log("formvalue")
    console.log(this.form.value);
    }
  }

  ngOnInit(): void {
  }
  private buildForm(){
    //form builder para hacer un formgrup
    this.form=this.fromBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]],     
    });

  }
}
