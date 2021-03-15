import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { UsuarioComponent } from '../../Usuarios/add-usuario/usuario.component';
import { TiendaComponent } from '../../Tiendas/tienda/tienda.component';

import { ProductComponent} from '../../Productos/productosListar/product.component';
import {AddProductComponent}from '../../Productos/add-product/add-product.component';
import {ProductDetailComponent}from '../../Productos/product-detail/product-detail.component';
import {SocioListarComponent} from '../../Usuarios/socioListar/socio-listar/socio-listar.component';
import {AddTiendaComponent} from '../../Tiendas/add-tienda/add-tienda.component';
import {ReservasComponent} from '../../reservas/reservas.component';
import {TiendaDetailComponent} from '../../Tiendas/tienda-detail/tienda-detail.component';




export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'socios',         component: SocioListarComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },

    { path: 'tiendas',        component: TiendaComponent},
    { path: 'productos',      component: ProductComponent},
    { path: 'productos/:id',  component: ProductDetailComponent},
 { path: 'createProduct/:id',component: AddProductComponent},
    { path: 'createProduct/:id',component: AddProductComponent},
    { path: 'sociocreate', component:UsuarioComponent},
    { path: 'tienda/:id',  component: AddTiendaComponent},
    { path: 'reservas/:id',  component: ReservasComponent},
    { path: 'tiendita/:id',  component: TiendaDetailComponent},
];
