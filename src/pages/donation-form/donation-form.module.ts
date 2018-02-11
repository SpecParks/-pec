import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationFormPage } from './donation-form';

@NgModule({
  declarations: [
    DonationFormPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationFormPage),
  ],
})
export class DonationFormPageModule {}
