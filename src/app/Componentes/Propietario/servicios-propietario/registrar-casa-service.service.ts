import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import firebase from 'firebase';
import { unescapeIdentifier } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegistrarCasaServiceService {

  newUser: any; 

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  firestore: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
    ){}

    registrarCasaServ(Propiedad, iDimage, urlImage){
      var idUsuario;
      var Usuario = firebase.auth().currentUser;
      idUsuario = Usuario.uid;

      //Agregamos casa a la tabla "propiedades"
      //Falta ponerle un ID aleatorio al doc de la casa
      //FALTA PASAR PARAMETRO DE LA URL DE LAS IMAGENES DE LA CASA Y PASARLO COMO URL DE IMAGENES EN EL 
      this.db.collection('propiedades').doc(iDimage).set(Propiedad)
      .then(()=>{       
        console.log("Casa Registrada con exito"); 
      }).catch(error =>{
        console.log(error);
        this.eventAuthError.next(error);
      });


      this.db.collection('propiedades').doc(iDimage).update({URLcasa: urlImage})
      .then(()=>{       
        console.log("Casa Registrada con exito"); 
      }).catch(error =>{
        console.log(error);
        this.eventAuthError.next(error);
      });

      //Agregamos la Url de la casa al usuario que está logueado 
      /*this.db.collection('usuarios').doc(idUsuario).update({URL_Propiedad: iDimage})
      .then(()=>{
        console.log("Usuario actualizado con la casa");
      }).catch(error =>{
        console.log(error);
        this.eventAuthError.next(error);
      });*/
    }
}
