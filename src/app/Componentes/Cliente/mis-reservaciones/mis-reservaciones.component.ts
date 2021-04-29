import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { reservacion } from '../Interfaces/reservacion_model';
import { ReservacionesServiceService } from '../servicios/reservaciones-service.service';
import { MatDialog, MatDialogConfig, } from '@angular/material/dialog';
import { ReservarPopupComponent } from '../reservar-popup/reservar-popup.component';
import Swal from 'sweetalert2';

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

  constructor( private reservacionesSvc:ReservacionesServiceService,
    private dialog:MatDialog) {//injectamos el servicio de las reservaciones
   this.idUsuario = firebase.auth().currentUser.uid;//extraemos el uid del cliente logueado
   this.listaReservaciones();//llamamos a la función desde que se construye.
  }

//desplegamos una lista de las reservaciones del cliente logueado
  ngOnInit(): void {}

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
  openCancelar()
  {
    Swal.fire({
      title: 'Cancelar reservación',
      text: '¿Cancelar reservacion?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
     }).then((result) => {
      if (result.value) {

      //Codigo en caso de que sí se desee cancelar reservación...
      Swal.fire(
          'Correcto',
          'Reservación cancelada',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelar',
          'Reserva sin cambios',
          'error'
        )
      }
    })
  }

  openExtender()
  {
    Swal.fire({
      title: 'Extender reservación',
      text: '¿Extender reservacion?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
     }).then((result) => {
      if (result.value) {

      //Codigo en caso de que si se lleve la cancelación de la reserva
      Swal.fire(
          'Correcto',
          'El tiempo de reserva ha aumentado',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelar',
          'Reserva sin modificaciones',
          'error'
        )
      }
    })
  }
}
