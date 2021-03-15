import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { UsuarioComponent } from './Usuarios/add-usuario/usuario.component';
//import { ProductComponent} from './Productos/productosListar/product.component;

import { TiendaComponent } from './Tiendas/tienda/tienda.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import{ProductComponent}from './Productos/productosListar/product.component';
import {AddProductComponent}from './Productos/add-product/add-product.component';
import {SocioListarComponent} from './Usuarios/socioListar/socio-listar/socio-listar.component';
import {ReservasComponent} from './reservas/reservas.component';






const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
  
  { path: 'user/work', component: TrabajoComponent },
  
  { path: 'user', component: UsuarioComponent},
  { path: 'productos', component: ProductComponent},
  { path: 'tiendas', component: TiendaComponent},
  { path: 'publicacion', component: PublicacionComponent},
  { path: 'temporal', component: ProductComponent},
  { path: 'producto/create', component: AddProductComponent},
  { path: 'socios', component: SocioListarComponent},
  { path: 'socio/create', component: SocioListarComponent},
  { path: 'reservas/:id', component: ReservasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
