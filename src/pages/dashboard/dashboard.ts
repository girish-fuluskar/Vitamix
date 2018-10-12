import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MaintenancePage } from '../../pages/maintenance/maintenance';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public appCtrl: App, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  gotoMaintenancePage() {
    console.log("Aditya: Go to Maitainence Page");
    this.navCtrl.push(MaintenancePage);
  }

  logout() {
    console.log("Aditya: Logout");

    const loader = this.loadingCtrl.create({
      content: "Logging out...",
      duration: 3000
    });

    loader.present();

    this.appCtrl.getRootNav().push(LoginPage);
  }

}
