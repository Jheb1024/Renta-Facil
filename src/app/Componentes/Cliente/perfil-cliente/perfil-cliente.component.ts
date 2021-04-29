import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { casas } from '../Interfaces/casa_model';
import { ImagenesCasaService } from '../servicios/imagenes-casa.service';
import firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ReservarPopupComponent } from '../reservar-popup/reservar-popup.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  images:Observable<casas[]>;
  casas1:casas[];
  fileUploads?: any[];

  constructor(private imageService: ImagenesCasaService,
    private dialog:MatDialog,
    ) { }

  ngOnInit(): void {
   this.imageService.getImages().subscribe(items=>{ //Aqui debe existir un for para poder mostrar solo las casas activas
      console.log(items);
      this.casas1 = items;
    });
  }

  openDialog(){
   // const dialogConfig = new MatDialogConfig();

   // dialogConfig.disableClose = true;
   // dialogConfig.autoFocus = true;

   // this.dialog.open(ReservarPopupComponent, dialogConfig);

    
  Swal.fire({
    title: 'Reservar Casa',
    text: '¿Hacer la reserva?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {
/*Swal.fire(
        'Correcto',
        'Registro correcto',
        'success'
      )*/
      const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.dialog.open(ReservarPopupComponent, dialogConfig);

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
