import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContentPage } from "../pages/content/content";
import { DonationDetailsPage } from "../pages/donation-details/donation-details";
import { DonationFormPage } from "../pages/donation-form/donation-form";
import { ThankYouPage } from "../pages/thank-you/thank-you";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ContentPage,
    DonationDetailsPage,
    DonationFormPage,
    ThankYouPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ContentPage,
    DonationDetailsPage,
    DonationFormPage,
    ThankYouPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
