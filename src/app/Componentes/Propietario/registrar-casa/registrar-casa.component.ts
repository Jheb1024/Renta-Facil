import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrarCasaServiceService } from '../servicios-propietario/registrar-casa-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-registrar-casa',
  templateUrl: './registrar-casa.component.html',
  styleUrls: ['./registrar-casa.component.css']
})
export class RegistrarCasaComponent implements OnInit {

  uploadProgress: Observable<number>;
  randomId: string;
  uploadURL: Observable<string>;
  URLIMAGE: string;

  crearRegistroCasa: FormGroup; //Variable para validar el formulario
  emailPattern: string | RegExp;

  constructor(private _storage: AngularFireStorage, private fb:FormBuilder, private registrarCasaServicio: RegistrarCasaServiceService) {
    this.crearRegistroCasa = this.fb.group({
      nombreCasa: ['', Validators.required,],
      noHabitantes: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      servicios: ['', Validators.required]
    })
    

   }

  ngOnInit(): void {
  }

    seleccionarFotos(event: any){
// Get input file
      const file = event.target.files[0];
      
      // Generate a random ID
       this.randomId = Math.random().toString(36).substring(2);
    console.log(this.randomId);
    const filepath = `images/${this.randomId}`;

    const fileRef = this._storage.ref(filepath);

    // Upload image
    const task = this._storage.upload(filepath, file);

    // Observe percentage changes
    this.uploadProgress = task.percentageChanges();

    // Get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => this.uploadURL = fileRef.getDownloadURL())
    ).subscribe();
    }

    //Metodo para gyardar el registro
    registrarCasaCom(){
      console.log("laurl permanece"+this.URLIMAGE);

      
      //Crear objeto a partir del formulario
     var  Usuario= firebase.auth().currentUser;
      const Propiedad : any = {
        
        nombreCasa: this.crearRegistroCasa.value.nombreCasa,
        nHabitantes: this.crearRegistroCasa.value.noHabitantes,
        precio: this.crearRegistroCasa.value.precio,
        descripcion: this.crearRegistroCasa.value.descripcion,
        servicios: this.crearRegistroCasa.value.servicios,
        //URLcasa:URL
      
      }
      this._storage.ref(`images/${this.randomId}`).getDownloadURL().subscribe(url=>{
        this.URLIMAGE = url;
        this.registrarCasaServicio.registrarCasaServ(Propiedad,this.randomId,this.URLIMAGE);
        console.log("urlde la imagen" + this.URLIMAGE);
      })
      
    }
}
