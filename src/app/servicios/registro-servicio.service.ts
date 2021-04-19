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
  resetFields: any;

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
      this.db.collection('usuarios').doc(userCredential.user.uid).set(this.newUser)
      .then(()=>{       
        this.router.navigate(['/']);  
      }).catch(error =>{
        console.log(error);
        this.eventAuthError.next(error);
      });

      //this.router.navigate(['/']);  

      this.resetFields();
      this.insertarDatos(userCredential)
      .then(()=>{       
          this.router.navigate(['/']);  

      }).catch(error =>{
        console.log(error);
        this.eventAuthError.next(error);
      });

    })
    .catch(error =>{
      this.eventAuthError.next(error);
    });
    
  }
  insertarDatos(userCredential: firebase.auth.UserCredential){
    console.log("id de usario"+userCredential.user.uid);
    return this.db.collection('usuarios').doc(userCredential.user.uid).set(this.newUser);
    /*
    return this.db.collection('usuarios').add({
      nombre: this.newUser.nombre,
      apellidoPaterno: this.newUser.apellidoP,
      apellidoMaterno: this.newUser.apellidoMaterno,
      correo: this.newUser.correo,
      telefono: this.newUser.telefono,
      role: 'cliente'
    })*/
  }
  /*
  agregarUsuario(usuario: any): Promise<any> {
    return this.firestore.collection('usuarios').add(usuario);
  }*/

}
