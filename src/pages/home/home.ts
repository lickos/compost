import { FireproviderProvider } from "./../../providers/fireprovider/fireprovider";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

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
  showForthButton: boolean = false;
  protiErotisi: string;
  sex: string;
  upValue;
  prosopika: boolean = false;
  showerotimatologio2: boolean = false;

  constructor(
    public navCtrl: NavController,
    public afd: AngularFireDatabase,
    public fp: FireproviderProvider
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
    this.prosopika = true;
  }

  showButton() {
    this.showThirdButton = true;
  }

  showButton2() {
    this.showForthButton = true;
  }

  changeView3() {
    if (this.protiErotisi == "andras") {
      "einai 1";
      this.sex = "ANDRES";
    } else if (this.protiErotisi == "ginaika") {
      this.sex = "GINAIKES";
    }
    this.fp.getitems(this.sex).then(data => {
      this.upValue = data;
      this.fp.setitems(this.sex, this.upValue);
    });
    this.showerotimatologio = false;
    this.showThirdButton = false;
    this.showerotimatologio2 = true;
  }
}
