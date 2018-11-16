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

      this.recipes = JSON.parse('[{"name" : "Smoothie", "title":"Four Fruit Smoothie","image_url" : "https://www.vitamix.com/media/recipe/rcpFourFruitSmoothie/images/500xNxFour_Fruit_Smoothie_0.jpg.pagespeed.ic.Sd3Jg3tTfj.jpg","description" : "Fresh orange, pineapple, banana, and strawberries are blended to perfection for a refreshing, all-natural beverage.","nutritional_info" : "","ingredients":"1 orange, peeled, halved#1 slice pineapple, peeled#½ banana, peeled#3 strawberries, hulled, quartered#½ cup (120 ml) water#2 Tablespoons agave nectar#1 cup (130 g) ice cubes","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 30 seconds, or until desired consistency is reached.","Yield":"3¾ cup (900 ml)","Total Time":"10 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Cucumber Melon Smoothie","image_url" : "https://www.vitamix.com/media/recipe/rcpCucumberMelonSmoothie/images/500xNxCucumber_Melon_Smoothie_0.jpg.pagespeed.ic.CNR5vYqiqo.jpg","description" : "This refreshing smoothie showcases the popular combination of cucumber and melon.","nutritional_info" : "","ingredients":"¼ cup (60 ml) soy milk#1 cup (170 g) green grapes#1½ cup (240 g) cantaloupe, peeled, seeded, cubed#½ cup (65 g) cucumber, peeled, diced#1 cup (170 g) honeydew melon, peeled, seeded, cubed#1 lime, peeled, halved#1 cup (130 g) ice cubes","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 45 seconds or until desired consistency is reached.","Yield":"4 cups (960 ml)","Total Time":"21 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Triple Berry Smoothie","image_url" : "https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg","description" : "Strawberries, blueberries, and raspberries blend with low-fat vanilla yogurt to create this sweet smoothie with a beautiful lavender hue.","nutritional_info" : "","ingredients":"½ cup (120 ml) water#½ cup (120 g) low fat vanilla yogurt#½ cup (85 g) red grapes#½ cup (75 g) frozen strawberries#½ cup (75 g) frozen blueberries#½ cup (60 g) frozen raspberries","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 1 minute or until desired consistency is reached, using the tamper to press the ingredients into the blades.","Yield":"3 cups (720 ml)","Total Time":"7 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Just Peachy Smoothie","image_url" : "https://www.vitamix.com/media/recipe/rcpJustPeachySmoothie/images/500xNxjustpeachysmoothiejpg.jpg.pagespeed.ic.5dE1dem5US.jpg","description" : "Grapes and blueberries beautifully complement the peachy sweetness of this all-fruit smoothie.","nutritional_info" : "","ingredients":"½ cup (85 g) grapes#1 cup (145 g) frozen blueberries#1 peach, pitted, halved#1 cup (130 g) ice cubes","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 40-45 seconds or until desired consistency is reached.","Yield":"2½ cup (600 ml)","Total Time":"11 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Good Morning Green Smoothie","image_url" : "https://www.vitamix.com/media/recipe/rcpGoodMorningGreenSmoothie/images/500xNxGood_Morning_Green_Smoothie_0.jpg.pagespeed.ic.zVvfksbCk_.jpg","description" : "Fresh fruit blends harmoniously with chopped cucumber and broccoli in this vibrant breakfast smoothie.","nutritional_info" : "","ingredients":"½ cup (120 ml) water#1 cup (170 g) green grapes#¼ cup (35 g) cucumber, diced#½ kiwi, peeled#½ apple, seeded, cored#¾ cup (75 g) broccoli, chopped#½ inch (1.3 cm) slice lemon, peeled#1 cup (130 g) ice cubes","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 1 minute or until desired consistency is reached. Serve immediately.","Yield":"3 cups (720 ml)","Total Time":"15 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Mango Delight Smoothie","image_url" : "https://www.vitamix.com/media/recipe/rcpMangoDelightSmoothie/images/500xNxmangodelightmainjpg.jpg.pagespeed.ic.EwsZX-WD9A.jpg","description" : "Mango, orange and banana make this smoothie a tropical treat.","nutritional_info" : "","ingredients":"1 orange, peeled, halved#½ banana, peeled#½ mango, peeled, pitted#½ apple, seeded, cored#1 cup (130 g) ice cubes","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 45 seconds or until desired consistency is reached.","Yield":"3¼ cup (780 ml)","Total Time":"11 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Pomegranate Boost Smoothie","image_url" : "https://www.vitamix.com/media/other/images/500xNxnew-PomegranateBoostSmoothie-v1.jpg.pagespeed.ic.yGtkr97DdC.jpg","description" : "With pomegranate, flax seed, and spinach, this smoothie has all the right ingredients to kick off a healthy new year.","nutritional_info" : "","ingredients":"¾ cup (180 ml) pomegranate juice#1 orange, peeled, halved#2 Tablespoons plain Greek yogurt#1 banana, peeled, halved#2 cups (60 g) spinach#1 Tablespoon flaxseed#1 cup (140 g) frozen sour cherries","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 45 seconds or until desired consistency is reached.","Yield":"3 cups (720 ml)","Total Time":"10 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Pine-Mint Smoothie","image_url" : "https://www.vitamix.com/media/recipe/rcpPineMintSmoothieI/images/500xNxpine-mint-smoothie-vitamix.jpg.pagespeed.ic.luBtlSdGZg.jpg","description" : "A little mint goes a long way in this refreshing smoothie, complete with the tropical flavor of pineapple.","nutritional_info" : "","ingredients":"2 cups (480 ml) water#2 cups (350 g) frozen pineapple#1 avocado, halved, pitted, peeled#1 cup (50 g) mint leaves#1 cup (30 g) spinach#1 lemon, peeled, halved","instruction":"#Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1. #Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 45 seconds or until desired consistency is reached.","Yield":"4 cups (960 ml)","Total Time":"11 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Warm Apple Ginger Smoothie","image_url" : "https://www.vitamix.com/media/other/images/500xNxnew-WarmAppleGingerSmoothie-v1.jpg.pagespeed.ic.YidoEjce-E.jpg","description" : "A warming blend of apple juice, apples, lemon zest, fresh ginger, and pumpkin pie spice.","nutritional_info" : "","ingredients":"1 cup (240 ml) apple juice#2 apples, seeded, cored, quartered#Zest of 1 lemon#1 teaspoon fresh ginger root#¼ teaspoon pumpkin pie spice, Vitamix recipe","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 2 minutes.","Yield":"2 cups (480 )","Total Time":"12 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Pumpkin Pie Smoothie","image_url" : "https://www.vitamix.com/media/recipe/rcpPumpkinPieSmoothie/images/500xNxpumpkinpiesmoothiemainjpg.jpg.pagespeed.ic.z9AqnTjk3P.jpg","description" : "With pumpkin, vanilla yogurt, and pumpkin pie spice, this smoothie tastes like the real thing! Top with whipped cream and a dust of cinnamon for a festive presentation.","nutritional_info" : "","ingredients":"½ cup (75 g) pumpkin#1 cup (240 ml) milk#⅓ cup (80 ml) sweetened condensed milk#1 Tablespoon vanilla yogurt#1 teaspoon pumpkin pie spice#1 cup (130 g) ice cubes","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 45 seconds or until desired consistency is reached.#Top with whipped cream and a dust of cinnamon.","Yield":"2¾ cup (660 ml)","Total Time":"11 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Hint of Mint Smoothie","image_url" : "https://www.vitamix.com/media/other/images/500xNxHint-of-Mint.jpg.pagespeed.ic.N0miBEvcyT.jpg","description" : "What better way to start your day than with a healthy, raw smoothie that provides the many health benefits of fresh mint, as well as its refreshing flavor!","nutritional_info" : "","ingredients":"¼ cup (40 g) green grapes#½ cup (120 ml) coconut water#2 cups (60 g) spinach#6 mint leaves#1 cup (165 g) pineapple, peeled, cubed#1 cup (130 g) ice cubes","instruction":"Place all ingredients into the Vitamix container in the order listed and secure the lid.#Select Variable 1 or the Smoothies program (if available).#Start the machine, slowly increase to its highest setting, and blend for 45 seconds; or start the machine and allow the Smoothies program to complete, using the tamper to push ingredients into the blades if needed.","Yield":"3½ cup (850 ml)","Total Time":"10 Minutes","Difficulty":"Easy"}]');
      this.filteredRecipes = this.recipes;

      loader.dismiss();

    // this.recipeProvider.getReceipe().then(result => {
    //   console.log("Adit();ya:  recipes Data: " + result.data);
    //   // this.recipes = JSON.parse(result.data);
    //   this.recipes = JSON.parse('{"name" : "Smoothie", "title":"Four Fruit Smoothie","image_url" : "https://www.vitamix.com/media/recipe/rcpFourFruitSmoothie/images/500xNxFour_Fruit_Smoothie_0.jpg.pagespeed.ic.Sd3Jg3tTfj.jpg","description" : "Fresh orange, pineapple, banana, and strawberries are blended to perfection for a refreshing, all-natural beverage.","nutritional_info" : "","ingredients":"1 orange, peeled, halved#1 slice pineapple, peeled#½ banana, peeled#3 strawberries, hulled, quartered#½ cup (120 ml) water#2 Tablespoons agave nectar#1 cup (130 g) ice cubes","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 30 seconds, or until desired consistency is reached.","Yield":"3¾ cup (900 ml)","Total Time":"10 Minutes","Difficulty":"Easy"},{"name" : "Smoothie","title":"Cucumber Melon Smoothie","image_url" : "https://www.vitamix.com/media/recipe/rcpCucumberMelonSmoothie/images/500xNxCucumber_Melon_Smoothie_0.jpg.pagespeed.ic.CNR5vYqiqo.jpg","description" : "This refreshing smoothie showcases the popular combination of cucumber and melon.","nutritional_info" : "","ingredients":"¼ cup (60 ml) soy milk#1 cup (170 g) green grapes#1½ cup (240 g) cantaloupe, peeled, seeded, cubed#½ cup (65 g) cucumber, peeled, diced#1 cup (170 g) honeydew melon, peeled, seeded, cubed#1 lime, peeled, halved#1 cup (130 g) ice cubes","instruction":"Place all ingredients into the Vitamix container in the order listed and secure lid.#Select Variable 1.#Turn machine on and slowly increase speed to Variable 10, then to High.#Blend for 45 seconds or until desired consistency is reached.","Yield":"4 cups (960 ml)","Total Time":"21 Minutes","Difficulty":"Easy"}');
    //   this.filteredRecipes = this.recipes;

    //   loader.dismiss();
    // });

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
