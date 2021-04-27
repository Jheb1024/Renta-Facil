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
  public user$: Observable<any> = this.login.afAuth.user;
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
    ) {
    this.isUserLogued = false; 
    //location.reload();
    
    
    
    
   }
  
  ngOnInit() { 
    //location.reload();console.log("rolee recuperado"+localStorage.getItem('role'));
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
          console.log("Es el propiettario el que entro..");
          this.isCliente = true;
          console.log(this.isCliente);
        }
      }
    }
  
  }
  recargarPagina(){
   
  }
   logout(){

    try{
       this.login.onLogout();
       //location.reload();
      
    }catch(error){
      console.log(error);
      
    }
  }
}
