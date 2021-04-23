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
      this.db.collection('propiedades').doc(iDimage).set(Propiedad)
      .then(()=>{       
        console.log("Casa Registrada con exito"); 
      }).catch(error =>{
        console.log(error);
        this.eventAuthError.next(error);
      });

      
      //Aqui se actualiza la casa con el ID del pripietario logueado
      this.db.collection('propiedades').doc(iDimage).update({URLcasa: urlImage, id_propietario: idUsuario})
      .then(()=>{       
        console.log("Casa Registrada con exito"); 
      }).catch(error =>{
        console.log(error);
        this.eventAuthError.next(error);
      });
      
    }
}
