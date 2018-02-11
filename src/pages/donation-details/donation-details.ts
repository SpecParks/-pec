import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonationFormPage } from "../donation-form/donation-form";

/**
 * Generated class for the DonationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donation-details',
  templateUrl: 'donation-details.html',
})
export class DonationDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationDetailsPage');
  }

  goToDonationFormPage() {
    this.navCtrl.push(DonationFormPage)
  }

}
