import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { casas } from '../../Cliente/casa_model';
import { ImagenesCasaService } from '../../Cliente/servicios/imagenes-casa.service';

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
    this.db.collection('propiedades').doc(Valor).update({estado:'Activa'})
      .then(()=>{       
        console.log("Modificacion a Activa de la casa"); 
      }).catch(error =>{
        console.log(error);
        this.eventAuthError.next(error);
      });
  }

}
