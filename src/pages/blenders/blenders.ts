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

    // this.recipeProvider.getBlender().then(result => {
    //   console.log("Aditya:  Blenders Data: " + JSON.parse(result.data).blenders);
    //   this.blenders = JSON.parse(result.data).blenders;

    //   this.filteredBlenders = this.blenders;

    //   loader.dismiss();
    // });

    this.blenders = JSON.parse('[{"name":"E310","image_url":"https://www.vitamix.com/media/other/images/E310-Black-Rglam-on-Gray-620-x-620.jpg","category":"Classic Blenders","status":"Working","desc":"Classic 48-ounce Container#Variable Speed Control#Pulse Control","price":"$299.95"},{"name":"5200 Standard","image_url":"https://www.vitamix.com/media/catalog/product/5200compact/images/CS-rglam-black.jpg","category":"Classic Blenders","status":"Working","desc":"Classic 64-ounce Container#Variable Speed Control#High/Low Controls#Available in Certified Reconditioned","price":"$449.95"},{"name":"Professional Series 750","image_url":"https://www.vitamix.com/media/other/images/GS-Heritage-Rglam-Copper.jpg","category":"Classic Blenders","status":"Working","desc":"64 oz. Low Profile Container#Variable Speed Control#Pulse Control#5 Pre-programmed settings#Available in Certified Reconditioned","price":"$599.95"},{"name":"780","image_url":"https://www.vitamix.com/media/catalog/product/780/images/GS-Touch-Programs-Black-Rglam.jpg","category":"Classic Blenders","status":"Working","desc":"64 oz. Low Profile Container#Variable Speed Control#Pulse Control#5 Pre-programmed settings#Touch screen controls","price":"$719.95"},{"name":"E310","image_url":"https://www.vitamix.com/media/other/images/E310-Black-Rglam-on-Gray-620-x-620.jpg","category":"Classic Blenders","status":"Working","desc":"Classic 48-ounce Container#Variable Speed Control#Pulse Control","price":"$299.95"}]');

      this.filteredBlenders = this.blenders;

      loader.dismiss();

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
