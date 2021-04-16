import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilAdministradorComponent } from './componentes/Administrador/perfil-administrador/perfil-administrador.component';
import { PerfilClienteComponent } from './componentes/Cliente/perfil-cliente/perfil-cliente.component';
import { HomeComponent } from './componentes/Home/home/home.component';
import { PerfilPropietarioComponent } from './componentes/Propietario/perfil-propietario/perfil-propietario.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegistroComponent } from './Componentes/Usuario/registro/registro.component';


const routes: Routes = [
//Componententes de la página principal
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component:  LoginComponent},

  //Componentes del propietario
  { path: 'PerfilPropietario',component:PerfilPropietarioComponent },
  //Componentes del cliente
  {path: 'PerfilCliente',component:PerfilClienteComponent},
  //Componentes del administrador
  {path: 'PerfilAdministrador',component: PerfilAdministradorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistroComponent, LoginComponent, HomeComponent]