import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { casas } from '../../Cliente/Interfaces/casa_model';
import { ImagenesCasaService } from '../../Cliente/servicios/imagenes-casa.service';
import Swal from 'sweetalert2';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-catalogo-admin',
  templateUrl: './catalogo-admin.component.html',
  styleUrls: ['./catalogo-admin.component.css']
})
export class CatalogoAdminComponent implements OnInit {

  images:Observable<casas[]>;
  casas1:casas[];
  fileUploads?: any[];
  eventAuthError: any;

  constructor(private imageService: ImagenesCasaService, private db:AngularFirestore) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(items=>{
      console.log(items);
      this.casas1 = items;

    });
  }

  darAlta(Valor){



      Swal.fire({
        title: 'Validar casa',
        text: '¿Hacer la activación?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          this.db.collection('propiedades').doc(Valor).update({estado:'Activa'})
          .then(()=>{       
            console.log("Modificacion a Activa de la casa"); 
          }).catch(error =>{
            console.log(error);
            this.eventAuthError.next(error);
          });

          Swal.fire(
            'Correcto',
            'Activación correcta',
            'success'
          )

    
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelar',
            'Activación cancelada',
            'error'
          )
        }
      })
  }

}
