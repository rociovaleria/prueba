import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Product } from './Productos/productosListar/product.model';
import { ProductoTemporalModel } from './Productos/productosListar/productoTemporal.model';
import {environment}from '../environments/environment';
import {  UserNode} from './publicacion/modelPrueba.model';
import { UserSocio } from './Usuarios/add-usuario/user.model';
import { Tienda } from './Tiendas/tienda/tienda.model';
import { TiendaComponent } from './Tiendas/tienda/tienda.component';
import {Reserva} from './reservas/reserva.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    
    //inyectar dependencia 
    private http: HttpClient
  ) { 
  }
  getAllProducts(){
    return this.http.get<ProductoTemporalModel[]>(environment.url_api+'/products');
  }
  getMisProductos(id:number){
    return this.http.get<Product[]>(`${environment.url_local}/producto/misproductos/${id}`);
  }
  getMiTienda(id:number){
    return this.http.get<Tienda[]>(`${environment.url_local}/tiendita/mitienda/${id}`);
  }
  getAllProducts2(){
    return this.http.get<Product[]>(environment.url_local+"/producto");
  }
  getAllSocios(){
    return this.http.get<UserSocio[]>(environment.url_local+"/socio");
  }
  getAllTiendas(){
    return this.http.get<Tienda[]>(environment.url_local+"/tiendita");
  }
  getProduct(id:string){
  return this.http.get<ProductoTemporalModel>(`${environment.url_api}/products/${id}`);
  }
  getReservas(id:number){
    return this.http.get<Reserva[]>(`${environment.url_local}/reserva/misreservas/${id}`);
    }
  createProduct1(product: ProductoTemporalModel){
    return this.http.post(`${environment.url_api}/products`,product);
  }
  createSocio(socio: UserSocio){
    return this.http.post(`${environment.url_local}/socio`,socio);
  }
  createProduct(product: Product){
    return this.http.post(`${environment.url_local}/producto`,product);
  }
  createUserNode(user: UserNode){
    return this.http.post(`${environment.url_local}/usuario`,user);
  }
  createTienda(tienda: Tienda){
    return this.http.post(`${environment.url_local}/tiendita`,tienda);
  }

}

