import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    
    //inyectar dependencia 
    private http: HttpClient
  ) { 
  }


}