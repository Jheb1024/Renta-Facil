import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoAdminComponent } from './Componentes/Administrador/catalogo-admin/catalogo-admin.component';
import { PerfilAdministradorComponent } from './componentes/Administrador/perfil-administrador/perfil-administrador.component';
import { PerfilClienteComponent } from './componentes/Cliente/perfil-cliente/perfil-cliente.component';
import { HomeComponent } from './componentes/Home/home/home.component';
import { CatalogoPropietarioComponent } from './componentes/propietario/catalogo-propietario/catalogo-propietario.component';
import { PerfilPropietarioComponent } from './componentes/Propietario/perfil-propietario/perfil-propietario.component';
import { RegistrarCasaComponent } from './componentes/Propietario/registrar-casa/registrar-casa.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegistroComponent } from './Componentes/Usuario/registro/registro.component';



const routes: Routes = [
//Componententes de la página principal
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component:  LoginComponent},

  //Componentes del propietario
  { path: 'PerfilPropietario',component:PerfilPropietarioComponent },
  {path: 'registrarCasa', component:RegistrarCasaComponent},
  {path: 'catalogoPropietario', component:CatalogoPropietarioComponent},
  //Componentes del cliente
  {path: 'PerfilCliente',component:PerfilClienteComponent},
  //Componentes del administrador
  {path: 'PerfilAdministrador',component: PerfilAdministradorComponent},
  {path: 'CatalogoAdministrador', component:CatalogoAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistroComponent, LoginComponent, HomeComponent, RegistrarCasaComponent,CatalogoPropietarioComponent]