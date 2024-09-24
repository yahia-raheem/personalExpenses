import { inject, Injectable, signal } from '@angular/core';
import { TypeModel, TypeModelSnapshot } from '../type.model';
import { CollectionReference, DocumentData, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  firestore: Firestore = inject(Firestore)

  types = signal<TypeModel[]>([])
  typesCollection: CollectionReference = collection(this.firestore, 'types')

  constructor() { 
    this.fetchAllTypes()
  }

  async fetchAllTypes() {
    const snapshot = await getDocs(this.typesCollection)

    const typesArray = this._snapshotToData(snapshot.docs)

    this.types.set(typesArray)
  }

  private _snapshotToData(snapshot: QueryDocumentSnapshot<DocumentData, DocumentData>[]): TypeModel[] {
    const types: TypeModel[] = []
    snapshot.forEach(element => {
      const data = element.data() as TypeModelSnapshot
      types.push({id: element.id, isInward: data.isInward, title: data.title})
    });

    return types
  }


}
