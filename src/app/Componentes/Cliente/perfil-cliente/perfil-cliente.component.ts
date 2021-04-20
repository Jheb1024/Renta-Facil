import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { casas } from '../casa_model';
import { ImagenesCasaService } from '../servicios/imagenes-casa.service';
import firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  images:Observable<casas[]>;
  casas1:casas[];
  fileUploads?: any[];

  constructor(private imageService: ImagenesCasaService) { }

  ngOnInit(): void {
    this.imageService.getImages().subscribe(items=>{
      console.log(items);
      this.casas1 = items;

    });
    /*this.imageService.getImages(1).snapshotChanges().pipe(
      map(changes =>
        
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
      
    ).subscribe(fileUploads => {
      this.fileUploads = fileUploads;
      console.log("Recuperamos las fotos"+ this.fileUploads);
    });*/
  }

}
