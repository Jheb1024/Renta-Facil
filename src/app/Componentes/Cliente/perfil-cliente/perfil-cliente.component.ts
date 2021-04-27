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
   this.imageService.getImages().subscribe(items=>{ //Aqui debe existir un for para poder mostrar solo las casas activas
      console.log(items);
      this.casas1 = items;
    });
  }

}
