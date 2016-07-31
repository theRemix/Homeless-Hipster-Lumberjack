import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, BeardsService } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  BeardsService,
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase({
    apiKey: "",
    authDomain: "homeless-hipster-lumberjack.firebaseapp.com",
    databaseURL: "https://homeless-hipster-lumberjack.firebaseio.com",
    storageBucket: "homeless-hipster-lumberjack.appspot.com",
  })
]);
