import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';

//import { moveIn } from '../router.animations';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil-propietario',
  templateUrl: './perfil-propietario.component.html',
  styleUrls: ['./perfil-propietario.component.css'],
  providers: [LoginService],
})
export class PerfilPropietarioComponent implements OnInit {

  constructor(private Authsvc:LoginService) {
    
  }  

  

  async ngOnInit(){
  }

}
