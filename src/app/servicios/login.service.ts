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
      this.usuario$ = this.afAuth.authState.pipe(
       switchMap((user)=>{
         if(user){
           return this.db.doc<UserInterface>(`usuarios/${user.uid}`).valueChanges();
         }
         return of(null);
       })
      )
    }

    
    
    async login(email:string, password: string){
      try{
          const {user} = await this.afAuth.signInWithEmailAndPassword(email,password)
          //this.Recargar = true;
          return user;
          }catch(error){
            console.log("Error en el login: "+error);
            
          }
  }
  recuperarColletionUsuarios(){
    return this.db.collection('usuarios');
  }
   onLogout(){

    this.afAuth.currentUser = null;
    this.afAuth.onAuthStateChanged(null);
    localStorage.removeItem("role");
    this.afAuth.signOut();
    this.ngZone.run(()=>this.router.navigate(['/']));
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

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
