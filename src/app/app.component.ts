import { Component, effect, inject, OnInit } from '@angular/core';
import { collection, collectionData, doc, docData, documentId, Firestore, getDocs } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { TypeService } from './types/serices/type.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'expenses';
  firestore: Firestore = inject(Firestore)
  typesService = inject(TypeService)

  constructor() {
  }

  ngOnInit(): void {
  }
}
