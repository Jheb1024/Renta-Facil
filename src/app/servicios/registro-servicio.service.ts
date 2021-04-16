import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegistroServicioService {

  constructor(private firestore: AngularFirestore) { }

  agregarUsuario(usuario: any): Promise<any> {
    return this.firestore.collection('usuarios').add(usuario);
  }
}
