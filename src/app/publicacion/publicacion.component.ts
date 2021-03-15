import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import {HttpClient}from '@angular/common/http';
import {User} from './userPublicacion.model';
import{ProductsService}from '../products.service';
import {UserNode }from './modelPrueba.model'
import {FormBuilder, FormGroup , Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.scss']
})
export class PublicacionComponent implements OnInit {
  user: SocialUser;
  usuario: UserNode;
  form: FormGroup;
   logIn : boolean;
  constructor(
    private fromBuilder: FormBuilder,
    private productsService: ProductsService,
    private httpClient: HttpClient,
    private authService: SocialAuthService
  ) {
    this.buildForm(); 
   }
   ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.logIn = (user != null);
    });

  }
   getNodeUser(){
    this.httpClient.get('http://localhost:3000/usuario')
    
    .subscribe(response => {
      console.log(response);
    });
   }
   getToken(){
    this.httpClient.get('http://localhost:3000/token')
    
    .subscribe(response => {
      console.log(response);
    });
   }


  

   getNodeUserPost(event: Event){
    event.preventDefault();

    const us=this.form.value;
    
     this.productsService.createUserNode(us).subscribe((response)=>{
      console.log(response);
      console.log(us);
  
    });
  }
   
  publicar(): void {

    const fbLoginOptions = {
  
      scope: 'pages_manage_posts, pages_read_engagement'
  
    };
  
   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions);
    this.authService.authState.subscribe((user) => {

      this.user = user;
      this.logIn=(user !=null)
      this.httpClient.post('http://localhost:3000/apifacebook', {token: this.user.authToken, userId: this.user.id})
    
        .subscribe(response => {
        console.log(response);
          console.log("volviendo de node")
        });
    
  console.log(this.user);
    
      this.logIn = (user != null);
    
    });
    
  
  }

  signOut(): void  { 
    this.authService.signOut () ; 
  }
  signInWithFB() : void  { 
    this.authService.signIn( FacebookLoginProvider.PROVIDER_ID ) ; 
  }
  
  

  private buildForm(){
    //form builder para hacer un formgrup
    this.form=this.fromBuilder.group({
      
      nombre:"",
      apellido:""

    });

  }
}
