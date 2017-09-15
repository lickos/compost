import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  showDim: boolean = true;
  showPrezi: boolean = false;
  showFirstButton: boolean = true;
  showSecondButton: boolean = false;
  erotimatologio: boolean = false;

  constructor(public navCtrl: NavController) {}

  changeView() {
    this.showDim = false;
    this.showPrezi = true;
    this.showFirstButton = false;
    this.showSecondButton = true;
  }

  changeView2() {
    this.showPrezi = false;
    this.erotimatologio = true;
    this.showSecondButton = false;
  }
}
