import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ReservarPopupComponent } from '../reservar-popup/reservar-popup.component';
import { ReservacionesServiceService } from '../servicios/reservaciones-service.service';

@Component({
  selector: 'app-extender-reservacion',
  templateUrl: './extender-reservacion.component.html',
  styleUrls: ['./extender-reservacion.component.css']
})
export class ExtenderReservacionComponent implements OnInit {
  extensionReservacion=new FormGroup({
    nuevaFecha: new FormControl(''),
  })
  private fecha1:Date;
  private fecha2:Date;
  
  constructor(private reservarSvc:ReservacionesServiceService,
    private dialogRef: MatDialogRef<ReservarPopupComponent>) {

     }

  async ngOnInit() {
  }
  extenderReservacion(){
    const idReservacion = this.reservarSvc.idReservacion;
    console.log("nueva fechiux"+this.extensionReservacion.value.nuevaFecha);
    this.fecha2 = new Date( this.extensionReservacion.value.nuevaFecha);
    this.fecha2.setDate(this.fecha2.getDate()+1);
    console.log('Fechaa nuevaaaa'+this.fecha2);
    let precioCasa=this.nuevoCostoRes();    
    return this.reservarSvc.extenderReservacion(this.fecha2,idReservacion, precioCasa).then(()=>{
      this.dialogRef.close();
    })
  }
  nuevoCostoRes():number{
    //Obtenemos las fechas del formulario
    this.fecha1 = new Date(this.reservarSvc.fechaInicial);
    
    console.log(this.fecha1,this.fecha2);
    //hacemos las operaciones para obtener lso dias y obtener el precio total de la reservación
    let resta = this.fecha2.getTime() - this.fecha1.getTime();
  
    let dias = Math.round(resta / (1000 * 60 * 60 * 24));
    dias=dias+1;
    //multiplicamos para obtener el precio
    let precio = this.reservarSvc.precioCasaActual;
    precio = precio * dias;
    console.log(precio);
    return precio;
  }
  cancelar(){
  this.dialogRef.close();
  }

}
