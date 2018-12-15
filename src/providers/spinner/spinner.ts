import { Injectable } from '@angular/core';

import { LoadingController } from 'ionic-angular';


/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpinnerProvider {
  spinner: any;

  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello SpinnerProvider Provider');
  }

  present() {
    this.spinner = this.loadingCtrl.create({
      content: ''
    });
    this.spinner.present();
  }

  dismiss() {
    if(this.spinner){ this.spinner.dismiss(); this.spinner = null; }
  }

}
