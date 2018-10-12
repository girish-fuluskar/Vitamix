import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    if (this.username == '' || this.username == undefined || this.password == '' || this.password == undefined) {
      const toast = this.toastCtrl.create({
        message: 'Username or password cannot be empty',
        duration: 3000
      });
      toast.present();
    } else {
      const loader = this.loadingCtrl.create({
        content: "Signing In...",
        duration: 3000
      });

      loader.present();

      var self = this;
      setTimeout(function () {
        self.navCtrl.setRoot(TabsPage);
      }, 3000);

    }
  }

}
