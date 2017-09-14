import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { FireproviderProvider } from "../../providers/fireprovider/fireprovider";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  showDim: boolean = true;
  showPrezi: boolean = false;
  showFirstButton: boolean = true;
  showSecondButton: boolean = false;
  showerotimatologio: boolean = false;
  showThirdButton: boolean = false;
  items: FirebaseListObservable<any[]>;

  constructor(
    public navCtrl: NavController,
    public afd: AngularFireDatabase,
    public firebaseProvider: FireproviderProvider
  ) {}

  changeView() {
    this.showDim = false;
    this.showPrezi = true;
    this.showFirstButton = false;
    this.showSecondButton = true;
  }

  changeView2() {
    this.showPrezi = false;
    this.showerotimatologio = true;
    this.showSecondButton = false;
    this.showThirdButton = true;
  }

  changeView3() {
    this.items = this.firebaseProvider.getitems();
    console.log(this.items);
  }
}
