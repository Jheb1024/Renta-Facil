import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
    
    ){}
  login(email: string, password: string){
    
    
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then( userCredential => {

          var idUsuario;
          var Usuario = firebase.auth().currentUser;
          idUsuario = Usuario.uid;
          //`usuarios/${idUsuario}`

          /*this.db.collection("usuarios").doc(idUsuario).ref.get().then(role =>{

            if(role.role == "Adminsitrador"){
              console.log("Entro a administrador");
            this.router.navigate(['/PerfilAdministrador']);
            }
          }) */
      })
    
    
  
  };
  
}

