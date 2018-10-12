import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RecipeProvider } from '../../providers/recipe/recipe';
import { BlenderDetailPage } from '../../pages/blender-detail/blender-detail';

@IonicPage()
@Component({
  selector: 'page-blenders',
  templateUrl: 'blenders.html',
})
export class BlendersPage {

  private blenders: any;
  private filteredBlenders: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public recipeProvider: RecipeProvider,
    public loadingCtrl: LoadingController) {

      const loader = this.loadingCtrl.create({
        content: "Please wait...",
      //  duration: 3000
      });

      loader.present();

    this.recipeProvider.getBlender().then(result => {
      console.log("Aditya:  Blenders Data: " + JSON.parse(result.data).blenders);
      this.blenders = JSON.parse(result.data).blenders;

      this.filteredBlenders = this.blenders;

      loader.dismiss();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlendersPage');
  }

  showBlenderDetailPage(selctedBlender: any) {
    this.navCtrl.push(BlenderDetailPage, { selctedBlender: selctedBlender });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    const val = ev.target.value;

    console.log("Aditya: getItems: " + val);

    if (val && val.trim() != '') {
      this.blenders = this.blenders.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeItems() {
    this.blenders = this.filteredBlenders;
  }

}
