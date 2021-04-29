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
  isLogued:boolean;
   //Variable para validar el formulario
  submited:boolean;
  //
  constructor(private auth: LoginService, private router:Router) 
    {
      this.isLogued = false;
    }
    onLogin( ){
      const {email, password} = this.loginForm.value;
      this.auth.login(email, password).then((user)=>{
        console.log(user.uid);
        this.auth.getDataUser();//Llamamos esta funcion del servicio para poder alamacenar el rol en el localstorage
        this.router.navigate(['/']);//nos redirigimos al home
      })
    }
    
  
  ngOnInit(): void {
  }

}
