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
import Swal from 'sweetalert2';
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
  imgEst: string="/src/assets/imagen/casa1.jpg";
  selectImagen: any=null;
  isSubmitted: boolean=false;

  crearRegistroCasa: FormGroup; //Variable para validar el formulario
  emailPattern: string | RegExp;

  constructor(private _storage: AngularFireStorage, private fb:FormBuilder, private registrarCasaServicio: RegistrarCasaServiceService) {
    this.crearRegistroCasa = this.fb.group({
      nombreCasa: ['', Validators.required,],
      direccionCasa: ['', Validators.required],
      noHabitantes: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
      servicios: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.restablecerValores(); ///invocacion para restablcer lo svalores
  }

  //Funcion para la vista previa
  vistaprevia(event:any)
  {
    
     if(event.target.files && event.target.files[0])
     {
       const reader=new FileReader();
       reader.onload=(e:any)=>this.imgEst=e.target.result;
       reader.readAsDataURL(event.target.files[0]);
       this.selectImagen=event.target.files[0];
     }else{

        this.imgEst=`https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Icon_-_upload_photo.svg/1024px-Icon_-_upload_photo.svg.png`;
        this.selectImagen=null;
     }
  }


//Evento cuando se selcciona una foto
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
      direccionCasa: this.crearRegistroCasa.value.direccionCasa,
      nHabitantes: this.crearRegistroCasa.value.noHabitantes,
      precio: this.crearRegistroCasa.value.precio,
      descripcion: this.crearRegistroCasa.value.descripcion,
      servicios: this.crearRegistroCasa.value.servicios,
      idCasa: this.randomId,
      //direccionCasa:;
      estado:'Inactiva'

    }

     /* this._storage.ref(`images/${this.randomId}`).getDownloadURL().subscribe(url=>{
        this.URLIMAGE = url;
        this.registrarCasaServicio.registrarCasaServ(Propiedad,this.randomId,this.URLIMAGE);
        console.log("urlde la imagen" + this.URLIMAGE);
      })*/
      
    }

    ///Para validar formulario

    guardar(formValue){
      this.isSubmitted=true;
    }
    get formControls()
    {
      return this.crearRegistroCasa["controls"];
    }

    restablecerValores()
    {
      this.crearRegistroCasa.reset();
      this.crearRegistroCasa.setValue({
        nombreCasa: '',
        direccionCasa:'',
        noHabitantes: '',
        precio: '',
        descripcion: '',
        servicios:''
      });
        
      this.imgEst=`https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Icon_-_upload_photo.svg/1024px-Icon_-_upload_photo.svg.png`;
      this.selectImagen=null;
      this.isSubmitted=false;
    }

    abrirAlerta(){
      if(this.crearRegistroCasa.valid)
      {
        Swal.fire({
          title: 'Registrar casa nueva',
          text: '¿Hacer el registro?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Si',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.value) {

            const Propiedad : any = {
        
              nombreCasa: this.crearRegistroCasa.value.nombreCasa,
              direccionCasa: this.crearRegistroCasa.value.direccionCasa,
              nHabitantes: this.crearRegistroCasa.value.noHabitantes,
              precio: this.crearRegistroCasa.value.precio,
              descripcion: this.crearRegistroCasa.value.descripcion,
              servicios: this.crearRegistroCasa.value.servicios,
              idCasa: this.randomId,
              //direccionCasa:;
              estado:'Inactiva'
      
            }
            this._storage.ref(`images/${this.randomId}`).getDownloadURL().subscribe(url=>{
              this.URLIMAGE = url;
              this.registrarCasaServicio.registrarCasaServ(Propiedad,this.randomId,this.URLIMAGE);
              console.log("urlde la imagen" + this.URLIMAGE);
            })
            Swal.fire(
              'Correcto',
              'Registro correcto',
              'success'
            )
            this.restablecerValores();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'Cancelar',
              'Registro cancelado',
              'error'
            )
            this.restablecerValores();
          }
        })
      };

    }


}
