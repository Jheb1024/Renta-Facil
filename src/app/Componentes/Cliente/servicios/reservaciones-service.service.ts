import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { reservacion } from '../Interfaces/reservacion_model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesServiceService {

  reservaciones:Observable<reservacion[]>;
  private reservacionCollection:AngularFirestoreCollection<reservacion>;

  constructor(private readonly afs:AngularFirestore) {
    this.reservacionCollection = afs.collection<reservacion>("reservaciones");
    this.recuperarReservaciones();
  }
  //se agenda la reservacion
  guardarReservacion(idUsuario:string){


  }
  recuperarReservaciones(){

    this.reservaciones = this.reservacionCollection.snapshotChanges()
    .pipe(map(accion=>accion.map(a=>a.payload.doc.data() as reservacion)))
  }
  //se extiende el tiempo de reservacin si es que está disponible
  extenderReservacion(idUsuario:string, idPropiedad:string){
    
  }
  //cancelar la reservacion
  cancelarReservacion(idUsuario:string, idPropiedad:string){
     
  }
}
