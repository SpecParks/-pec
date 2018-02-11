import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ThankYouPage} from "../thank-you/thank-you";

/**
 * Generated class for the DonationFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donation-form',
  templateUrl: 'donation-form.html',
})
export class DonationFormPage {

  formData = {
    name: '',
    email: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationFormPage');
  }

  goToThankYou() {
    console.log('TODO: go to thank you')
    this.navCtrl.push(ThankYouPage);
  }

}
