import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from "@angular/common/http";
import { Geolocation } from '@ionic-native/geolocation';


import { MyApp } from './app.component';
import {GoogleMapsPage} from "../pages/google-maps/google-maps";
import { SpinnerProvider } from '../providers/spinner/spinner';
import { GmapProvider } from '../providers/gmap/gmap';

@NgModule({
  declarations: [
    MyApp,
    GoogleMapsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GoogleMapsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpinnerProvider,
    GmapProvider
  ]
})
export class AppModule {}
