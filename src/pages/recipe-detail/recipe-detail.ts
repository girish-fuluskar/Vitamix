import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html',
})
export class RecipeDetailPage {

  private recipeDetail: any;
  private ingredients: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipeDetail = this.navParams.get("selctedRecipe");
  }

  ionViewDidLoad() {
    let ingredient = this.recipeDetail.ingredients;
    this.ingredients = ingredient.split('#');
  }
}
