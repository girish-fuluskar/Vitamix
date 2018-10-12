import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RecipeProvider } from '../../providers/recipe/recipe';
import { RecipeDetailPage } from '../../pages/recipe-detail/recipe-detail';

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  private recipes: any;
  private filteredRecipes: any;
  searchRecipes: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public recipeProvider: RecipeProvider,
    public loadingCtrl: LoadingController) {

      const loader = this.loadingCtrl.create({
        content: "Please wait...",
      //  duration: 3000
      });

      loader.present();

    this.recipeProvider.getReceipe().then(result => {
      console.log("Adit();ya:  recipes Data: " + result.data);
      this.recipes = JSON.parse(result.data);
      this.filteredRecipes = this.recipes;

      loader.dismiss();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipePage');

  }

  showRecipeDetailPage(selctedRecipe: any) {
    this.navCtrl.push(RecipeDetailPage, { selctedRecipe: selctedRecipe });
  }

  getItems(ev: any) {
    this.initializeItems();
    const val = ev.target.value;

    console.log("Aditya: getItems: " + val);

    if (val && val.trim() != '') {
      this.recipes = this.recipes.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  initializeItems() {
    this.recipes = this.filteredRecipes;
  }

}
