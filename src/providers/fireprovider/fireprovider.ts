import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

/*
  Generated class for the FireproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FireproviderProvider {
  constructor(public afd: AngularFireDatabase) {}

  getitems() {
    return this.afd.list("/question1/");
  }
}
