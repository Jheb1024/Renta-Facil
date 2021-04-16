import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'app-registrar-casa',
  templateUrl: './registrar-casa.component.html',
  styleUrls: ['./registrar-casa.component.css']
})
export class RegistrarCasaComponent implements OnInit {

  constructor() { }
  seleccionarFotos(event: any){
    const file: File = event.target.files[0];
    console.log("Seleccionar archivo",file.name);

    const metaData = {'contentType':file.type};
    const storeRef: firebase.default.storage.Reference = firebase.default.storage().ref('/photos/featured/url1');
    storeRef.put(file, metaData);
    console.log('Subiendo Archivo', file.name);
  }
  ngOnInit(): void {
  }

}
