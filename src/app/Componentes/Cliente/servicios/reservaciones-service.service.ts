import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
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
  public idCasa:string;
  public idReservacion: string;
  eventAuthError: any;
  public precio:number;
  public nombreCasa:string;
  public fechaInicial:Date;
  public precioCasaActual:number;


  constructor(private readonly afs:AngularFirestore, private db:AngularFirestore) {
    this.reservacionCollection = afs.collection<reservacion>("reservaciones");
    this.recuperarReservaciones();
  }
  //se agenda la reservacion
  async guardarReservacion(reservacion,idReservacion){
  
    return this.reservacionCollection.doc(idReservacion).set(reservacion).then(()=>{       
      console.log("Rservacion registrada con exito"); 
    }).catch(error =>{
      console.log(error);
      this.eventAuthError.next(error);
    });

  }
  recuperarReservaciones(){

    this.reservaciones = this.reservacionCollection.snapshotChanges()
    .pipe(map(accion=>accion.map(a=>a.payload.doc.data() as reservacion)))
  }
  //se extiende el tiempo de reservacin si es que está disponible
  async extenderReservacion(nuevaFecha,idReservacion, costoTotal){
    await this.db.collection('reservaciones').doc(idReservacion).update({fechaFinal: nuevaFecha, costo:costoTotal }).then(()=>{
      console.log("Se ha extendido la fecha con exito");
    })
  }
  //cancelar la reservacion
  async cancelarReservacion(idReservacion){
    await this.db.collection('reservaciones').doc(idReservacion).delete()
  }
}