import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroServicioService } from 'src/app/servicios/registro-servicio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  crearRegistro: FormGroup; //Variable para validar el formulario
  submited: false;
  emailPattern: string | RegExp;
  //
  constructor(private fb:FormBuilder, private registroServicio: RegistroServicioService) {
    this.crearRegistro = this.fb.group({
      nombre: ['', Validators.required,],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      telefono: ['', Validators.required, Validators.maxLength(10)],
      correo: ['', Validators.required, Validators.pattern (this.emailPattern)],
      password: ['', Validators.required],
      
    })
  }
  ngOnInit(): void {
    //this.registrarUsuario();
  }
  
  submit() {
    if (this.crearRegistro.valid) {
      console.log(this.crearRegistro.value);
    }
    else{
      
    }
  }
//Metodo para crear nuevos usuarios e insertarlos en la base de datos
  
registrarUsuario(){
    //
    this.submit();
    const usuario : any = {
      nombre: this.crearRegistro.value.nombre,
      apellidoP: this.crearRegistro.value.apellidoPaterno,
      apellidoM: this.crearRegistro.value.apellidoMaterno,
      telefono: this.crearRegistro.value.telefono,
      correo: this.crearRegistro.value.correo,
      password: this.crearRegistro.value.password,
      //URLcasa:"",
      role:"Cliente",  
    }
    //console.log(usuario);

    this.registroServicio.crearUsuario(usuario);

    /*this.registroServicio.agregarUsuario(usuario).then(()=>{
      console.log("Usuario Registrado con exito");
    }).catch(error => {
      console.log(error);
    }); */
    
  }
}
