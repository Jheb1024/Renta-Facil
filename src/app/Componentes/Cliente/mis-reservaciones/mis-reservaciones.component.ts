import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { reservacion } from '../Interfaces/reservacion_model';
import { ReservacionesServiceService } from '../servicios/reservaciones-service.service';

@Component({
  selector: 'app-mis-reservaciones',
  templateUrl: './mis-reservaciones.component.html',
  styleUrls: ['./mis-reservaciones.component.css']
})
export class MisReservacionesComponent implements OnInit {
  reservaciones$ = this.reservacionesSvc.reservaciones;
  arrayReservaciones:reservacion[];
  listReservaciones=[];
  idUsuario: string;

  constructor( private reservacionesSvc:ReservacionesServiceService) {
   this.idUsuario = firebase.auth().currentUser.uid;
   this.listaReservaciones();
  }

  listaReservaciones(){
    this.reservaciones$.subscribe(items =>{
      this.arrayReservaciones = items;
      var i;
      for(i=0; i<this.arrayReservaciones.length; i++){
        console.log("entramos al for");
        if(this.arrayReservaciones[i].idUsuario == this.idUsuario){
          this.listReservaciones.push(this.arrayReservaciones[i]);
        }
      }
    })
  }
  



  ngOnInit(): void {
  }

}
