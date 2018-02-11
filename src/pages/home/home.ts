import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContentPage } from "../content/content";
import { DonationDetailsPage } from "../donation-details/donation-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToContent() {
    this.navCtrl.push(ContentPage);
  }

  goToDonationImpact() {
    this.navCtrl.push(DonationDetailsPage);
  }
}
