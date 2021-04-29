import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { casas } from '../../Cliente/Interfaces/casa_model';
import { ImagenesCasaService } from '../../Cliente/servicios/imagenes-casa.service';
import firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-catalogo-propietario',
  templateUrl: './catalogo-propietario.component.html',
  styleUrls: ['./catalogo-propietario.component.css']
})
export class CatalogoPropietarioComponent implements OnInit {
  images:Observable<casas[]>;
  casas1:casas[];
  arrayCasas:casas[];
  idUsuario:string;
  arrayCasas1 = [];
  
  eventAuthError: any;

  constructor(private imageService: ImagenesCasaService, 
    private authf:AngularFireAuth, 
    private db:AngularFirestore,
    private router: Router,) { 

    this.idUsuario = firebase.auth().currentUser.uid;

  }

  ngOnInit(): void {
    this.cargarGaleria();
  }

  cargarGaleria(){
    this.imageService.getImages().subscribe(items=>{
      console.log(items);
      this.casas1 = items;
      //Procesamos las casas que corresponden al propietario logueado, por el atributo de id_propietario
      var i: number;
      var j=0;
      for(i=0; i<this.casas1.length; i++){
        if(this.casas1[i].id_propietario == this.idUsuario){
          console.log(this.casas1[i]);
          this.arrayCasas1.push(this.casas1[i]);
        }
      }
    });
  }


  darBaja(Valor){

      Swal.fire({
        title: 'Dar de baja la casa',
        text: '¿Hacer baja?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
       }).then((result) => {
        if (result.value) {
  
        //Codigo
        this.db.collection('propiedades').doc(Valor).delete()
        .then(()=>{       
          this.router.navigate(['/PerfilPropietario']); 
          //this.cargarGaleria();
          console.log("Casa Eliminada"); 
        }).catch(error =>{
          console.log(error);
          this.eventAuthError.next(error);
        });
        this.cargarGaleria();
        Swal.fire(
            'Correcto',
            'Casa dada de baja',
            'success'
          )
  
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelar',
            'Casa sin modificaciones',
            'error'
          )
        }
      })

  }



}
