import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GuardarFirestoreService {

  constructor( private firestore: AngularFirestore) { }

  async guardarLibroFireStore(libro: any) {
    await this.firestore.collection('libros').add(libro)
  }
}
