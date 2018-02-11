import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationDetailsPage } from './donation-details';

@NgModule({
  declarations: [
    DonationDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationDetailsPage),
  ],
})
export class DonationDetailsPageModule {}
