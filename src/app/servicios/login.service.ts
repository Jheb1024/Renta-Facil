import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { UserInterface } from 'src/app/Componentes/Usuario/models/userInterface';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, observable, of } from 'rxjs';
import { catchError, first, map, retry, switchMap, take, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import firebase from 'firebase';
import { promise } from 'selenium-webdriver';
import { rolValidator } from '../Componentes/Usuario/rolValidator';
import { AngularFireDatabase } from '@angular/fire/database';
import { stringify } from '@angular/compiler/src/util';


@Injectable({
  providedIn: 'root'
})
export class LoginService extends rolValidator{
  public isLogued:boolean;
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  public usuario$:Observable<UserInterface>;
  public usuario2:Observable<any>
  private superuser:Observable<UserInterface>
  public Recargar:boolean;


  constructor(
    public afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    private ngZone:NgZone,
    private db2:AngularFireDatabase
    
    ){
      super();
      //Inicializamos el observable que contenndrá el objeto del usuario logueado
      this.usuario$ = this.afAuth.authState.pipe(
       switchMap((user)=>{
         if(user){
           return this.db.doc<UserInterface>(`usuarios/${user.uid}`).valueChanges();
         }
         return of(null);
       })
      )
    }
    //El metodo login es asincrono para poder realizar esaa accion
    //cuando dicha acción se cumpla nos redirija al home
  async login(email:string, password: string){
    try{
        const {user} = await this.afAuth.signInWithEmailAndPassword(email,password)
        //this.Recargar = true;
        return user;
        }catch(error){
          console.log("Error en el login: "+error);
          
        }
  }
  //Recolectamos la lista de usuarios
  recuperarColletionUsuarios(){
    return this.db.collection('usuarios');
  }

   onLogout(){
    
    localStorage.removeItem("role");//Eliminamos el role del localstorage
    this.afAuth.signOut();//cerrramos sesión de forma apropiada
    this.ngZone.run(()=>this.router.navigate(['/'])); ///no redirige al home
  }

  getCurrentUser(){//retornamos el usuario actual
    return this.afAuth.authState.pipe(first()).toPromise();
  }

//Obtenemos el objeto desde la base de datos por medio del ID y luego obtenemos el rol
//guardamos el rol en el local storage
  getDataUser(){
    this.afAuth.currentUser.then(user =>{
       this.superuser = this.db.collection("usuarios").doc(user.uid).valueChanges()
       this.superuser.subscribe(user2 =>{
         console.log("extraemos el rol desde el login "+user2.role)
         localStorage.setItem('role', user2.role);
       })
    })
  }
  
}
