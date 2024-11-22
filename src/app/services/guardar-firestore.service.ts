import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GuardarFirestoreService {

  constructor( private firestore: AngularFirestore) { }

  guardarLibroFireStore(libro: any) {
    this.firestore.collection('libros').add(libro)
  }

}
