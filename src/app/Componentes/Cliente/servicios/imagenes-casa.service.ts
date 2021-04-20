import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import firebase from 'firebase';
import { Observable } from 'rxjs';
import { casas } from '../casa_model';


@Injectable({
  providedIn: 'root'
})
export class ImagenesCasaService {

  private basePath = 'propiedades';

  images:Observable<casas[]>;
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
  ) {

    this.images = this.db.collection('propiedades').valueChanges();
  }

  getImages() {
    return this.images;
    
  }
}
