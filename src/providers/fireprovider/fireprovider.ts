import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class FireproviderProvider {
  constructor(public afd: AngularFireDatabase) {}

  getitems(sex) {
    return new Promise(resolve => {
      let path = this.afd.database.ref("question1/" + sex);
      path.on("value", function(snapshot) {
        resolve(snapshot.val() + 1);
      });
    });
  }

  setitems(sex, val) {
    this.afd.object("question1/" + sex).set(val);
  }
}
