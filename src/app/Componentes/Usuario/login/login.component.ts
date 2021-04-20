import { Component, OnInit, HostBinding } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from  'src/app/servicios/login.service';
import { Router } from '@angular/router';
import {NgForm } from '@angular/forms';
import {NgModel} from '@angular/forms';
import { UserInterface } from 'src/app/Componentes/Usuario/models/userInterface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
   //Variable para validar el formulario
  submited: false;
  //
  constructor(private auth: LoginService) 
    {

    }
    onLogin( ){
      const {email, password} = this.loginForm.value;
      this.auth.login(email, password);
    }
  
  ngOnInit(): void {
    //this.registrarUsuario();
  }
//Metodo para crear nuevos usuarios e insertarlos en la base de datos
}
