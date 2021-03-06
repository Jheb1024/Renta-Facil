import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoAdminComponent } from './Componentes/Administrador/catalogo-admin/catalogo-admin.component';
import { PerfilAdministradorComponent } from './componentes/Administrador/perfil-administrador/perfil-administrador.component';
import { ExtenderReservacionComponent } from './componentes/cliente/extender-reservacion/extender-reservacion.component';
import { MisReservacionesComponent } from './componentes/Cliente/mis-reservaciones/mis-reservaciones.component';
import { PerfilClienteComponent } from './componentes/Cliente/perfil-cliente/perfil-cliente.component';
import { PerfilRealComponent } from './componentes/cliente/perfil-real/perfil-real.component';
import { ReservarPopupComponent } from './componentes/cliente/reservar-popup/reservar-popup.component';
import { HomeComponent } from './componentes/Home/home/home.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CatalogoPropietarioComponent } from './componentes/propietario/catalogo-propietario/catalogo-propietario.component';
import { PerfilPropietarioComponent } from './componentes/Propietario/perfil-propietario/perfil-propietario.component';
import { RegistrarCasaComponent } from './componentes/Propietario/registrar-casa/registrar-casa.component';
import { CaClienteGuard } from './Componentes/Usuario/ca-cliente.guard';
import { CanEditGuard } from './Componentes/Usuario/can-edit.guard';
import { CanPropietarioGuard } from './Componentes/Usuario/can-propietario.guard';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegistroComponent } from './Componentes/Usuario/registro/registro.component';



const routes: Routes = [
//Componententes de la página principal
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component:  LoginComponent},

  //Componentes del propietario
  { path: 'PerfilPropietario',component:PerfilPropietarioComponent,
    canActivate:[CanPropietarioGuard],
  },
  {path: 'registrarCasa', component:RegistrarCasaComponent},
  {path: 'catalogoPropietario', component:CatalogoPropietarioComponent,
  canActivate:[CanPropietarioGuard],
  },
  //Componentes del cliente
  {path: 'PerfilCliente',component:PerfilClienteComponent,
    canActivate:[CaClienteGuard],
  },
  {path: 'misreservaciones', component:MisReservacionesComponent,
    canActivate:[CaClienteGuard],
  },
  { path: 'reservar', component:ReservarPopupComponent,
    canActivate:[CaClienteGuard],
  },
  { path: 'extenderreservacion', component:ExtenderReservacionComponent,
    canActivate:[CaClienteGuard],
  },
  { path: 'perfilreal', component:PerfilRealComponent, 
    canActivate:[CaClienteGuard],
  },
 
  //Componentes del administrador
  {path: 'PerfilAdministrador',component: PerfilAdministradorComponent,
    canActivate:[CanEditGuard],
  },
  {
    path: 'CatalogoAdministrador', component:CatalogoAdminComponent,
    canActivate:[CanEditGuard],
  },
  { path: 'nabvar', component:NavbarComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistroComponent, 
  LoginComponent, 
  HomeComponent, 
  RegistrarCasaComponent,
  CatalogoPropietarioComponent, 
  NavbarComponent, 
  MisReservacionesComponent,
  ReservarPopupComponent, 
  ExtenderReservacionComponent,
  PerfilRealComponent,]