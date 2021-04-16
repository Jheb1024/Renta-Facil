import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroServicioService {

  newUser: any; 

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  firestore: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
    ){}
//
  crearUsuario(user){
    this.afAuth.createUserWithEmailAndPassword(user.correo, user.password)
    .then(userCredential =>{
      this.newUser = user;
      console.log(userCredential);
      userCredential.user.updateProfile({
        displayName: user.nombre +' '+ user.apellidoPaterno
      });


      this.router.navigate(['/']);  

      /*
      this.insertarDatos(userCredential)
      .then(()=>{
        if(userCredential){
          this.router.navigate(['/']);  
        }
        
      })*/

    })
    .catch(error =>{
      this.eventAuthError.next(error);
    });
    
  }
  insertarDatos(userCredential: firebase.auth.UserCredential){
    return this.db.doc('usuarios').set({
      nombre: this.newUser.nombre,
      apellidoPaterno: this.newUser.apellidoPaterno,
      apellidoMaterno: this.newUser.apellidoMaterno,
      correo: this.newUser.email,
      telefono: this.newUser.telefono,
      role: 'cliente'
    })
  }
  /*
  agregarUsuario(usuario: any): Promise<any> {
    return this.firestore.collection('usuarios').add(usuario);
  }*/

}
