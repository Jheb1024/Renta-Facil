import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { UserInterface } from 'src/app/Componentes/Usuario/models/userInterface';
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
    private router: Router,
    ){
    
    }
  login(email: string, password: string){
    
    var tipoUsuario:any = null;
    var isCliente:any = null;
    var isPropietario:any= null;
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then( userCredential => {

          var idUsuario: string;
          var Usuario = firebase.auth().currentUser;
          idUsuario = Usuario.uid;

          this.isUserAdmin(idUsuario).subscribe(userRole =>{
            tipoUsuario = Object.assign({},userRole.roles).hasOwnProperty('Administrador');
            if(tipoUsuario){
              console.log("Entro a administrador");
            this.router.navigate(['/PerfilAdministrador']);
            }else{
              tipoUsuario = Object.assign({},userRole.roles).hasOwnProperty('Propietario');
              if(tipoUsuario){
                console.log("Entro a propietario");
              this.router.navigate(['/PerfilPropietario']);
              }else{
                tipoUsuario = Object.assign({},userRole.roles).hasOwnProperty('Cliente');
                if(tipoUsuario){
                  console.log("Entro a Cliente");
                this.router.navigate(['/PerfilCliente']);
                }
              }
            }
          })
      })
  };

  isUserAdmin(userID: string){
    return this.db.doc<UserInterface>(`usuarios/${userID}`).valueChanges();
  }
  
}

