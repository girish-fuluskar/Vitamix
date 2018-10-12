import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-blender-detail',
  templateUrl: 'blender-detail.html',
})
export class BlenderDetailPage {

  private blenderDetail: any;
  private descriptions: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.blenderDetail = this.navParams.get("selctedBlender");
    console.log("Aditya: Selected Blenders: " + JSON.stringify(this.blenderDetail));
  }

  ionViewDidLoad() {
    let decscription = this.blenderDetail.desc;
    this.descriptions = decscription.split('#');
  }

}
