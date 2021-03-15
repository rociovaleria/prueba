import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { OsvaldoComponent } from './osvaldo/osvaldo.component';

//importando el modulo material
import{ MaterialModule} from './material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioComponent } from './Usuarios/add-usuario/usuario.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { TiendaComponent } from './Tiendas/tienda/tienda.component';
//import { ProductosComponent } from './productos/productos.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import {AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {ComponentsModule}from './components/components.module';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddProductComponent } from './Productos/add-product/add-product.component';

import { ProductComponent} from './Productos/productosListar/product.component';
import { ProductDetailComponent } from './Productos/product-detail/product-detail.component';

import {AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { AddTiendaComponent } from './Tiendas/add-tienda/add-tienda.component';
///fb
import {SocialLoginModule,SocialAuthServiceConfig} from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { SocioListarComponent } from './Usuarios/socioListar/socio-listar/socio-listar.component';
import {ReservasComponent} from './reservas/reservas.component';
import { LoginComponent } from './login/login.component';
import { TiendaDetailComponent } from './Tiendas/tienda-detail/tienda-detail.component';
import { OfertaComponent } from './oferta/oferta.component';


@NgModule({
  declarations: [
    AppComponent,
    OsvaldoComponent,
    UsuarioComponent,
    TrabajoComponent,
    TiendaComponent,
   // ProductosComponent,
    PublicacionComponent,
    AdminLayoutComponent,
    AddProductComponent,
    ProductComponent,
    ProductDetailComponent,
    AddTiendaComponent,
    SocioListarComponent,
    ReservasComponent,
    LoginComponent,
    TiendaDetailComponent,
    OfertaComponent,
  
    


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ComponentsModule,
    MatInputModule,
    MaterialModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    SocialLoginModule
    
    
  
    
     

    

  ],
  exports:[],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
        useValue: {
           autoLogin: false,
           providers: [
             {
               id: FacebookLoginProvider.PROVIDER_ID,
               provider: new FacebookLoginProvider("246508853836719"),
             },
          ],
       } as SocialAuthServiceConfig,
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
