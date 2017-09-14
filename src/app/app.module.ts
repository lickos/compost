import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { FireproviderProvider } from "../providers/fireprovider/fireprovider";

export const firebaseConfig = {
  apiKey: "AIzaSyC9EakqPdhKx3ZuyF_JaekJxW-h4s6fc4w",
  authDomain: "compostsurvey-ba896.firebaseapp.com",
  databaseURL: "https://compostsurvey-ba896.firebaseio.com",
  projectId: "compostsurvey-ba896",
  storageBucket: "compostsurvey-ba896.appspot.com",
  messagingSenderId: "244956535059"
};

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }, FireproviderProvider]
})
export class AppModule {}
