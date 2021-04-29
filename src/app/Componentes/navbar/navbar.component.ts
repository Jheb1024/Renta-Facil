import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { LoginService } from 'src/app/servicios/login.service';
import { UserInterface } from '../Usuario/models/userInterface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isUserLogued:boolean
  public user$: Observable<any> = this.login.afAuth.user; //Este observable nos idica si el usuario está en sesion
  public usuario$:Observable<UserInterface>;
  public prepietario:string;
  public isAdministrador:boolean;
  public isPropietario:boolean;
  public isCliente:boolean;
  rol:string;

  constructor(private login: LoginService, 
    private router:Router, 
    private db:AngularFirestore, 
    private auf:AngularFireAuth,
    ){}
  
  ngOnInit() { 
  //Vemos de que tipo es el rol de usuario almacenado en el localsotarage
  //volvemos true a la variable booleana
    this.rol = localStorage.getItem('role');
    if(this.rol === 'Administrador'){
      console.log("Es el administrador el que entro..");
      this.isAdministrador = true;
      console.log(this.isAdministrador);
     
    }else{
      if(this.rol === 'Propietario'){
        console.log("Es el propiettario el que entro..");
        this.isPropietario = true;
        console.log(this.isPropietario);
      }else{
        if(this.rol === 'Cliente'){
          console.log("Es el cliente el que entro..");
          this.isCliente = true;
          console.log(this.isCliente);
         
        }else{
          this.isAdministrador = false;
          this.isPropietario = false;
          this.isCliente = false;
        }
      }
    }
  }

   logout(){
    try{
       this.login.onLogout(); 
    }catch(error){
      console.log(error);
    }
  }
}
