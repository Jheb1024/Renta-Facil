import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/usuario/login/login.component';
import { RegistrarCasaComponent } from './componentes/Propietario/registrar-casa/registrar-casa.component';
import { HomeComponent } from './componentes/Home/home/home.component';
import { PerfilClienteComponent } from './componentes/Cliente/perfil-cliente/perfil-cliente.component';
import { PerfilPropietarioComponent } from './componentes/Propietario/perfil-propietario/perfil-propietario.component';
import { PerfilAdministradorComponent } from './componentes/Administrador/perfil-administrador/perfil-administrador.component';
//Lirería de nevironment donde se crea el objeto de la base de datos
import { environment } from 'src/environments/environment';
//Moduloss de Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
//import { AngularFireModule } from 'angularfire2';
//Modulo para forms

import { HttpClientModule } from '@angular/common/http';
import { RegistroServicioService } from './servicios/registro-servicio.service';
import { LoginService } from './servicios/login.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginComponent,
    RegistrarCasaComponent,
    HomeComponent,
    PerfilClienteComponent,
    PerfilPropietarioComponent,
    PerfilAdministradorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     // 3. Initialize
     AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule, // firestore
     AngularFireAuthModule, // auth
     AngularFireStorageModule, // storage
     ReactiveFormsModule, // modulo imprtado forms
     HttpClientModule,
     FormsModule
  ],
  providers: [RegistroServicioService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
