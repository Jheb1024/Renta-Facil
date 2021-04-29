import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

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
import { CatalogoPropietarioComponent } from './componentes/propietario/catalogo-propietario/catalogo-propietario.component';
import { RegistrarCasaServiceService } from './Componentes/Propietario/servicios-propietario/registrar-casa-service.service';
import * as firebase from 'firebase';
import { ImagenesCasaService } from './componentes/Cliente/servicios/imagenes-casa.service';
import { CatalogoAdminComponent } from './Componentes/Administrador/catalogo-admin/catalogo-admin.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CanEditGuard } from './Componentes/Usuario/can-edit.guard';
import { CanPropietarioGuard } from './Componentes/Usuario/can-propietario.guard';
import { CaClienteGuard } from './Componentes/Usuario/ca-cliente.guard';
import { MisReservacionesComponent } from './componentes/Cliente/mis-reservaciones/mis-reservaciones.component';
import { ReservacionesServiceService } from './Componentes/Cliente/servicios/reservaciones-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReservarPopupComponent } from './componentes/cliente/reservar-popup/reservar-popup.component';

 


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
    CatalogoPropietarioComponent,
    CatalogoAdminComponent,
    NavbarComponent,
    MisReservacionesComponent,
    ReservarPopupComponent,
   
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
     // 3. Initialize
     AngularFireModule.initializeApp(environment.firebase),
     AngularFirestoreModule, // firestore
     AngularFireAuthModule, // auth
     AngularFireStorageModule, // storage
     ReactiveFormsModule, // modulo imprtado forms
     HttpClientModule,
     FormsModule,
     BrowserAnimationsModule,
     MatSliderModule,
     MatDialogModule,
     MatButtonModule,
     
  ],
  entryComponents:[ReservarPopupComponent],
  providers: [RegistroServicioService, LoginService, RegistrarCasaServiceService, ImagenesCasaService, CanEditGuard, CanPropietarioGuard,CaClienteGuard,ReservacionesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
