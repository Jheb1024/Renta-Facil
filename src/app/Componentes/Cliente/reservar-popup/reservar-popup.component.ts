import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservar-popup',
  templateUrl: './reservar-popup.component.html',
  styleUrls: ['./reservar-popup.component.css']
})
export class ReservarPopupComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ReservarPopupComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
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
  }

}
