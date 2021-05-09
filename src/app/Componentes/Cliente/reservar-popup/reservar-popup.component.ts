import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
<<<<<<< HEAD
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { casas } from '../Interfaces/casa_model';
import { ReservacionesServiceService } from '../servicios/reservaciones-service.service';
=======
>>>>>>> origin/master
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservar-popup',
  templateUrl: './reservar-popup.component.html',
  styleUrls: ['./reservar-popup.component.css']
})
export class ReservarPopupComponent implements OnInit {
  reservarForm = new FormGroup({
    fechaI: new FormControl(''),
    fechaS: new FormControl(''),
    Nombre: new FormControl(''),
    noTarjeta: new FormControl(''),
    expMes: new FormControl(''),
    expAnio: new FormControl(''),
    cvc: new FormControl(''),
  })
  idUsuario: string;
  fecha1: Date;
  fecha2: Date;
  propiedades: any;
  casas: Observable<casas[]>;
  private casasCollection: AngularFirestoreCollection<casas>;
  private casasArray: [];
  private precio: any;


  constructor(private dialogRef: MatDialogRef<ReservarPopupComponent>,
    private reservarService: ReservacionesServiceService,
    private db: AngularFirestore) {
    this.idUsuario = firebase.auth().currentUser.uid;
  }

  ngOnInit(): void {
  }

  reservar() {
  /*  const idReservacion = Math.random().toString(36).substring(2);
     let precio= this.calcularCostoRes();
    const reservacion: any = {
      fechaInicio: new Date(this.reservarForm.value.fechaI),
      fechaFinal: new Date(this.reservarForm.value.fechaS),
      NombreCliente: this.reservarForm.value.Nombre,
      noTarjeta: this.reservarForm.value.noTarjeta,
      tarjetaExpiracion: this.reservarForm.value.expMes + this.reservarForm.value.expAnio,
      cvc: this.reservarForm.value.cvc,
      idPropiedad: this.reservarService.idCasa,
      idUsuario: this.idUsuario,
      idReservacion: idReservacion,
      costo:precio,
      nombreCasa:this.reservarService.nombreCasa,
      precioCasa:this.reservarService.precio,
    }
    this.reservarService.guardarReservacion(reservacion, idReservacion).then(() => {
      this.dialogRef.close();
    })*/

    Swal.fire({
      title: 'Finalizar proceso de la reservación',
      text: '¿Finalizar reservacion?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

     //Codigo en caso de que si se lleve a cabo el proceso dinal dde la reservación
     const idReservacion = Math.random().toString(36).substring(2);
     let precio= this.calcularCostoRes();
     const reservacion: any = {
      fechaInicio: new Date(this.reservarForm.value.fechaI),
      fechaFinal: new Date(this.reservarForm.value.fechaS),
      NombreCliente: this.reservarForm.value.Nombre,
      noTarjeta: this.reservarForm.value.noTarjeta,
      tarjetaExpiracion: this.reservarForm.value.expMes + this.reservarForm.value.expAnio,
      cvc: this.reservarForm.value.cvc,
      idPropiedad: this.reservarService.idCasa,
      idUsuario: this.idUsuario,
      idReservacion: idReservacion,
      costo:precio,
      nombreCasa:this.reservarService.nombreCasa,
      precioCasa:this.reservarService.precio,
    }
    this.reservarService.guardarReservacion(reservacion, idReservacion).then(() => {
      this.dialogRef.close();
    })
      Swal.fire(
          'Correcto',
          'Reserva finalizada',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelar',
          'Reservación cancelada',
          'error'
        )
      }
    })

  }
  calcularCostoRes(): number {
    //Obtenemos las fechas del formulario
    this.fecha1 = new Date(this.reservarForm.value.fechaI);
    this.fecha2 = new Date(this.reservarForm.value.fechaS);

    //hacemos las operaciones para obtener lso dias y obtener el precio total de la reservación
    let resta = this.fecha2.getTime() - this.fecha1.getTime()
    console.log(Math.round(resta / (1000 * 60 * 60 * 24)));
    let dias = Math.round(resta / (1000 * 60 * 60 * 24));
    dias = dias+1;
    //multiplicamos para obtener el precio
    let precio = this.reservarService.precio;
    precio = precio * dias;
    console.log(precio);
    return precio;
  }

  close() {
    this.dialogRef.close();
<<<<<<< HEAD
=======
}
openReserva()
{
    Swal.fire({
      title: 'Finalizar proceso de la reservación',
      text: '¿Finalizar reservacion?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {

     //Codigo en caso de que si se lleve a cabo el proceso dinal dde la reservación
      Swal.fire(
          'Correcto',
          'Reserva finalizada',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelar',
          'Reservación cancelada',
          'error'
        )
      }
    })
>>>>>>> origin/master
  }

}
