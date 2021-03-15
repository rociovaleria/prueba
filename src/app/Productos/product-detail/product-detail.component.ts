import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { param } from 'jquery';
import { ProductsService } from '../../products.service';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { HttpClient } from '@angular/common/http';

import Swal from 'sweetalert2';
import { Product } from '../productosListar/product.model';
import { OfertaComponent } from 'src/app/oferta/oferta.component';
import { ViewChild } from '@angular/core';
import { Oferta } from 'src/app/oferta/oferta.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, AfterViewInit {

  @ViewChild(OfertaComponent, { static: false })
  //private ofertaModal: OfertaComponent;
  private ofertarModal: OfertaComponent;
  user: SocialUser;
  logIn: boolean;
  productos: Product[] = [];
  responseFB: string = "";
  private todos: any[];
  clickedOferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    //inyectar como dependencia 
    private productsService: ProductsService,
    private httpClient: HttpClient,
    private authService: SocialAuthService
  ) {
    this.clickedOferta = new Oferta(null, null, null, null, null, null);
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      const id = param.id;

      this.fetchProduct(id);
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.logIn = (user != null);
    });
  }
  fetchProduct(id: number) {
    //recibe con el subscribe
    this.productsService.getMisProductos(id).subscribe(
      productResponse => {
        console.log(productResponse);
        this.productos = productResponse;
      }
    )
  }
  ofertar(nombre: string, image: string) {
    this.clickedOferta.image = image;
    this.clickedOferta.nombreproducto = nombre;
    this.ofertarModal.openModal();
  }

  onClickOfertar(event: any) {
    
    let oferta = event;
    let image=oferta.image;
    let descripcionP=oferta.descripcionP;
    let detalleoferta= oferta.detalleoferta;
    let messageoferta=oferta.messageoferta;
    let valordescuento= oferta.valordescuento;
    let nombreproducto=oferta.nombreproducto;
    console.log(image);
    const fbLoginOptions = {

      scope: 'pages_manage_posts, pages_read_engagement,publish_to_groups,pages_read_engagement,pages_read_user_content,pages_manage_ads,pages_manage_posts,pages_manage_engagement',

    };
    
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions);
    this.authService.authState.subscribe((user) => {
    
    this.user = user;
    this.logIn = (user != null)
    this.httpClient.post(`${environment.url_local}/apifacebook/offer`,{image,descripcionP,detalleoferta,messageoferta,valordescuento,nombreproducto,token: this.user.authToken, userId: this.user.id,})
    .subscribe(response => {
      console.log(response);
      this.responseFB = response.toString();
      if (this.responseFB == "200") {
        Swal.fire({
          title: 'Exito',
          text: 'Acabas de realizar una oferta en Facebook hipermegamundored!',
          icon: 'success',
          showCancelButton: true,
          //confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'cerrar'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Ocurrio un error vuelve a intentarlo mas tarde!',
          icon: 'error',
          showCancelButton: true,
          //confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'cerrar'
        });
      }


    });
    this.ofertarModal.closeModal();
    this.logIn = (user != null);

    });
  }


  publicar(descripcion: string, image: string, marca: string, modelo: string, procesador: string, tarjetagrafica: string, precio: number): void {

    const fbLoginOptions = {

      scope: 'pages_manage_posts, pages_read_engagement,publish_to_groups,pages_read_engagement,pages_read_user_content,pages_manage_ads,pages_manage_posts,pages_manage_engagement',

    };

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions);
    this.authService.authState.subscribe((user) => {

      this.user = user;
      this.logIn = (user != null)
      this.httpClient.post(`${environment.url_local}/apifacebook`, { token: this.user.authToken, userId: this.user.id, descripcion, image, marca, modelo, procesador, tarjetagrafica, precio })
     
        .subscribe(response => {
          console.log(response);
          this.responseFB = response.toString();
          if (this.responseFB == "200") {


            Swal.fire({
              title: 'Exito',
              text: 'Acabas de realizar una publicacion en Facebook hipermegamundored!',
              icon: 'success',
              showCancelButton: true,
              //confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'cerrar'
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: 'Ocurrio un error vuelve a intentarlo mas tarde!',
              icon: 'error',
              showCancelButton: true,
              //confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'cerrar'
            });
          }


        });

      console.log(this.user);

      this.logIn = (user != null);

    });



  }



}
