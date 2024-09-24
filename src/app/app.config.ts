import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"expenses-17007","appId":"1:924980680381:web:65887fba117de8764e09d4","databaseURL":"https://expenses-17007-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"expenses-17007.appspot.com","apiKey":"AIzaSyBuiQWb3Yz65VKCB_gzcYWrkgIshUquMEA","authDomain":"expenses-17007.firebaseapp.com","messagingSenderId":"924980680381","measurementId":"G-311MG5MT4W"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
