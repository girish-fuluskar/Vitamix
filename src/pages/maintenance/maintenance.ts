import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessagePage } from '../message/message';
import { RecipeProvider } from '../../providers/recipe/recipe';


@IonicPage()
@Component({
  selector: 'page-maintenance',
  templateUrl: 'maintenance.html',
})
export class MaintenancePage {
  messages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipeProvider: RecipeProvider) {
    this.recipeProvider.getMessage()
      .subscribe(data => {
        console.log("Aditya: Message Data: " + JSON.stringify(data));
        this.messages = data;
      }, error => {
        console.log("Aditya: Message Error: " + error);
      }, () => {

      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintenancePage');
  }

  gotoMessagePage(message: any) {
    this.navCtrl.push(MessagePage, { message: message });
  }

}
