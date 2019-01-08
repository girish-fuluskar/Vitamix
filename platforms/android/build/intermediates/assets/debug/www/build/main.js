webpackJsonp([9],{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlenderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlenderDetailPage = /** @class */ (function () {
    function BlenderDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.blenderDetail = this.navParams.get("selctedBlender");
        console.log("Aditya: Selected Blenders: " + JSON.stringify(this.blenderDetail));
    }
    BlenderDetailPage.prototype.ionViewDidLoad = function () {
        var decscription = this.blenderDetail.desc;
        this.descriptions = decscription.split('#');
    };
    BlenderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blender-detail',template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/blender-detail/blender-detail.html"*/'<!--\n  Generated template for the BlenderDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Blender</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img style="height: 45%;width: 100%;" src={{blenderDetail.image_url}}>\n  <h4 ion-text style="font-size: 1.7rem">{{blenderDetail.name}}</h4>\n  <div style="padding-left: 20px">\n    <h5 ion-text style="font-size: 1.5rem">Description</h5>\n    <!-- <h6 ion-text style="font-size: 1.2rem">{{blenderDetail.desc}}</h6> -->\n    <ion-row>\n      <ion-col col-12 *ngFor="let description of descriptions">\n        <h6 ion-text style="font-size: 1rem;">{{description}}</h6>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          Category:\n          <br>\n          <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem">{{blenderDetail.category}}</h6>\n        </ion-col>\n        <ion-col col-4>Status:\n          <br>\n          <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem">{{blenderDetail.status}}</h6>\n        </ion-col>\n        <ion-col col-4>Price:\n          <br>\n          <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem">{{blenderDetail.price}}</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/blender-detail/blender-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BlenderDetailPage);
    return BlenderDetailPage;
}());

//# sourceMappingURL=blender-detail.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlendersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recipe_recipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_blender_detail_blender_detail__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlendersPage = /** @class */ (function () {
    function BlendersPage(navCtrl, navParams, recipeProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeProvider = recipeProvider;
        this.loadingCtrl = loadingCtrl;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
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
    BlendersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlendersPage');
    };
    BlendersPage.prototype.showBlenderDetailPage = function (selctedBlender) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_blender_detail_blender_detail__["a" /* BlenderDetailPage */], { selctedBlender: selctedBlender });
    };
    BlendersPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        var val = ev.target.value;
        console.log("Aditya: getItems: " + val);
        if (val && val.trim() != '') {
            this.blenders = this.blenders.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    BlendersPage.prototype.initializeItems = function () {
        this.blenders = this.filteredBlenders;
    };
    BlendersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blenders',template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/blenders/blenders.html"*/'<!--\n  Generated template for the BlendersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Blenders</ion-title>\n  </ion-navbar>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-grid>\n    <ion-row *ngFor="let blender of blenders" (click)="showBlenderDetailPage(blender)">\n      <!-- <ion-col col-6 *ngFor="let blender of blenders" (click)="showBlenderDetailPage(blender)"> -->\n        <ion-col><img src={{blender.image_url}}></ion-col>\n        <ion-col>\n            <h5 ion-text style="text-align: center; margin-top: 0.6rem !important;">{{blender.name}}</h5>\n        </ion-col>\n      <!-- </ion-col> -->\n\n    </ion-row>\n\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/blenders/blenders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_recipe_recipe__["a" /* RecipeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], BlendersPage);
    return BlendersPage;
}());

//# sourceMappingURL=blenders.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_youtube_video_player__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_text_to_speech__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, youtube, speechRecognition, plt, cd, tts) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.youtube = youtube;
        this.speechRecognition = speechRecognition;
        this.plt = plt;
        this.cd = cd;
        this.tts = tts;
        this.chats = [];
        this.menu = [];
        this.data = { message: '' };
        this.greetings = ['hi', 'hello', 'hey', 'hi, how are you', 'ask vitamix', 'open vitamix'];
        this.recipes = ['can you show me soup recipes', 'can you show me smoothie recipes', 'gingered carrot orange soup', 'thai ginger soup with cashews',
            'harvest cheddar soup', 'jackfruit soup', 'tortilla soup', 'tomato soup', 'buckwheat black bean soup',
            'can you show me smoothies recipes', 'how about recipes', 'what options do i have in recipes',
            'what are the different recipe categories', 'perfect summer smoothie', 'vitamix triple berry smoothie',
            'vitamix green smoothie', 'mango delight smoothie', 'vitamix site', 'perfect summer smoothie',
            'vitamix triple berry smoothie', 'vitamix green smoothie', 'mango delight smoothie'];
        this.isRecording = false;
        this.isPermission = false;
        this.stringSimilarity = __webpack_require__(344);
    }
    ChatPage.prototype.isIos = function () {
        return this.plt.is('ios');
    };
    ChatPage.prototype.getPermission = function () {
        var _this = this;
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission();
                _this.isPermission = true;
            }
            else {
                _this.isPermission = false;
            }
        });
    };
    ChatPage.prototype.stopListening = function () {
        var _this = this;
        this.speechRecognition.stopListening().then(function () {
            _this.isRecording = false;
        });
    };
    ChatPage.prototype.speak = function (speakText) {
        if (this.plt.is('ios')) {
            this.tts.speak({ text: speakText, locale: 'en-US', rate: 1.55 })
                .then(function () { return console.log('Success'); })
                .catch(function (reason) { return console.log(reason); });
        }
        else {
            this.tts.speak({ text: speakText, locale: 'en-US', rate: 1 })
                .then(function () { return console.log('Success'); })
                .catch(function (reason) { return console.log(reason); });
        }
    };
    ChatPage.prototype.startListening = function () {
        var _this = this;
        this.speechRecognition.isRecognitionAvailable()
            .then(function (avilable) {
            _this.speechRecognition.requestPermission()
                .then(function () {
                _this.speechRecognition.startListening().subscribe(function (chat) {
                    console.log("Speech Recog", chat);
                    _this.isRecording = true;
                    _this.sendMessage(chat[0].toLowerCase());
                    console.log("Chat value: " + chat[0].toLowerCase());
                    _this.cd.detectChanges();
                    _this.stopListening();
                });
                console.log('Granted');
            }, function () { return console.log('Denied'); });
        });
        //Stop Listening after 5 seconds
        // let stopListening = setTimeout(() =>{
        //   this.stopListening();
        // }, 5000);
    };
    // startListening() {
    //   if(this.isPermission){
    //     if(this.isRecording){
    //       console.log("Start Listening");
    //       this.stopListening();
    //     } else {
    //       console.log("Start Listening Else");
    //       let options = {
    //         language: 'en-US'
    //       }
    //       this.speechRecognition.startListening().subscribe(chat => {
    //         console.log("Speech Recog", chat);
    //         for(this.i = 0; this.i < this.greetings.length; this.i++){
    //             console.log("Inside Loop");
    //             if(this.greetings[this.i] === this.stringSimilarity.findBestMatch(this.greetings[this.i],chat).bestMatch.target){
    //               console.log("Here", this.stringSimilarity.findBestMatch(this.greetings[this.i],chat).bestMatch.target);
    //               var reply = this.stringSimilarity.findBestMatch(this.greetings[this.i],chat).bestMatch.target;
    //               //this.chats = chat;
    //               //this.chats.push(reply);
    //               this.sendMessage(reply);
    //               this.cd.detectChanges();
    //               break;
    //             } else if(this.recipes[this.i] === this.stringSimilarity.findBestMatch(this.recipes[this.i],chat).bestMatch.target){
    //               console.log("Here in else ", this.stringSimilarity.findBestMatch(this.recipes[this.i],chat).bestMatch.target);
    //               var reply = this.stringSimilarity.findBestMatch(this.recipes[this.i],chat).bestMatch.target;
    //               //this.chats = chat;
    //               //this.chats.push(reply);
    //               this.sendMessage(reply);
    //               this.cd.detectChanges();
    //               break;
    //             }
    //         }
    //       });
    //       this.isRecording = true;
    //     }
    //   } else {
    //    this.getPermission();
    //   }
    // }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.sendMessage = function (message) {
        var _this = this;
        //this.chats.push(message);
        this.content.scrollToBottom();
        //this.speak(message);
        var nlpResult = this.stringSimilarity.findBestMatch(message, this.greetings.concat(this.recipes)).bestMatch.target;
        var confidence = this.stringSimilarity.findBestMatch(message, this.greetings.concat(this.recipes)).bestMatch.rating;
        console.log("Confidence: ", this.stringSimilarity.findBestMatch(message, this.greetings.concat(this.recipes)));
        console.log("NLP Result: ", nlpResult);
        if (confidence < 0.1) {
            this.chats.push("Sorry, I did not understand you. Please say again.");
            this.content.scrollToBottom();
            this.speak("Sorry, I did not understand you. Please say again.");
            var hideFooterTimeout = setTimeout(function () {
                _this.startListening();
            }, 4000);
            if (this.plt.is('ios')) {
                var hideFooterTimeout_1 = setTimeout(function () {
                    _this.stopListening();
                }, 4000);
            }
        }
        else {
            if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "can you show me soup recipes") {
                //this.chats.push("Sure, let me check.");
                //this.speak("Sure, let me check.");
                this.content.scrollToBottom();
                this.chats.push("Sure, let me check.");
                this.content.scrollToBottom();
                this.speak("Sure, let me check. I found seven soup recipes. Which one you like?");
                var menuTimeout = setTimeout(function () {
                    //this.chats.push("Gingered Carrot Orange Soup, \n Thai Ginger Soup with Cashews, \n Harvest Cheddar Soup, \n Jackfruit Soup, \n Tortilla Soup, \n Tomato Soup, \n and Buckwheat Black Bean Soup \n Which one you like?");
                    _this.menu = [];
                    _this.menu.push("I found seven soup recipes. Which one you like? <br> &#8226; Gingered Carrot Orange Soup<br>&#8226; Thai Ginger Soup with Cashews<br>&#8226; Harvest Cheddar Soup<br>&#8226; Jackfruit Soup<br>&#8226; Tortilla Soup<br>&#8226; Tomato Soup<br>&#8226; Buckwheat Black Bean Soup");
                    _this.chats.push(_this.menu);
                    _this.content.scrollToBottom();
                    _this.content.scrollToBottom();
                    _this.content.scrollToBottom();
                    //this.speak("Gingered Carrot Orange Soup, \n Thai Ginger Soup with Cashews, \n Harvest Cheddar Soup, \n Jackfruit Soup, \n Tortilla Soup, \n Tomato Soup, \n and Buckwheat Black Bean Soup. Which one you like?");
                    //this.chats.push("Thai Ginger Soup with Cashews");
                    // this.chats.push("Harvest Cheddar Soup");
                    // this.chats.push("Jackfruit Soup");
                    // this.chats.push("Tortilla Soup");
                    // this.chats.push("Tomato Soup");
                    // this.chats.push("Buckwheat Black Bean Soup");
                    // this.chats.push("Which one you like?");
                    //this.speak("Which one you like?");
                }, 4000);
                this.content.scrollToBottom();
                if (this.plt.is('ios')) {
                    var speakTimeout = setTimeout(function () {
                        _this.stopListening();
                    }, 1000);
                }
                else {
                    var speakTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 15000);
                }
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "gingered carrot orange soup") {
                // this.playvideo("SrC3kHkHks8");
                console.log("gingered carrot orange soup");
                this.chats.push("Great! Here it is.");
                this.content.scrollToBottom();
                this.speak("Great! Here it is. Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.youtube.openVideo('lSFDcmr8S2Q');
                }, 2000);
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "thai ginger soup with cashews") {
                // this.playvideo("SrC3kHkHks8");
                console.log("thai ginger soup with cashews");
                this.chats.push("Great! Here it is.");
                this.content.scrollToBottom();
                this.speak("Great! Here it is. Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.youtube.openVideo('B_w59q2hdjI');
                }, 2000);
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "harvest cheddar soup") {
                // this.playvideo("SrC3kHkHks8");
                console.log("harvest cheddar soup");
                this.chats.push("Great! Here it is.");
                this.content.scrollToBottom();
                this.speak("Great! Here it is. Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.speak("Sorry! No video available for " + nlpResult);
                }, 2000);
                if (this.plt.is('ios')) {
                    var speakTimeout = setTimeout(function () {
                        _this.stopListening();
                    }, 1000);
                }
                else {
                    var speakTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 7000);
                }
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "jackfruit soup") {
                // this.playvideo("SrC3kHkHks8");
                console.log("Jackfruit Soup");
                this.chats.push("Great! Here it is.");
                this.content.scrollToBottom();
                this.speak("Great! Here it is. Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.speak("Sorry! No video available for " + nlpResult);
                }, 2000);
                if (this.plt.is('ios')) {
                    var speakTimeout = setTimeout(function () {
                        _this.stopListening();
                    }, 1000);
                }
                else {
                    var speakTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 7000);
                }
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "tortilla soup") {
                // this.playvideo("SrC3kHkHks8");
                console.log("Tortilla Soup");
                this.chats.push("Great! Here it is.");
                this.content.scrollToBottom();
                this.speak("Great! Here it is. Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.youtube.openVideo('T8rh3dR2xyc');
                }, 2000);
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "tomato soup") {
                // this.playvideo("SrC3kHkHks8");
                console.log("Tomato Soup");
                this.chats.push("Great! Here it is.");
                this.content.scrollToBottom();
                this.speak("Great! Here it is. Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.speak("Sorry! No video available for " + nlpResult);
                }, 2000);
                if (this.plt.is('ios')) {
                    var speakTimeout = setTimeout(function () {
                        _this.stopListening();
                    }, 1000);
                }
                else {
                    var speakTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 7000);
                }
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "buckwheat black bean soup") {
                // this.playvideo("SrC3kHkHks8");
                console.log("Buckwheat Black Bean Soup");
                this.chats.push("Great! Here it is.");
                this.content.scrollToBottom();
                this.speak("Great! Here it is. Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.speak("Sorry! No video available for " + nlpResult);
                }, 2000);
                if (this.plt.is('ios')) {
                    var speakTimeout = setTimeout(function () {
                        _this.stopListening();
                    }, 1000);
                }
                else {
                    var speakTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 7000);
                }
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && (nlpResult === "what options do i have in recipes" || nlpResult === "what are the different recipe categories")) {
                var hideFooterTimeout = setTimeout(function () {
                    //this.chats.push("I can help you explore recipes for \n Smoothies, \n Soupes, \n Frozen Desserts, \n Flours and Doughs, \n Dips and Spreads. \n Which of these are you interested in?");
                    _this.menu = [];
                    _this.menu.push("I can help you explore recipes for<br>&#8226; Smoothies<br>&#8226; Soupes<br>&#8226; Frozen Desserts<br>&#8226; Flours and Doughs<br>&#8226; Dips and Spreads<br>Which of these are you interested in?");
                    _this.chats.push(_this.menu);
                    _this.content.scrollToBottom();
                    _this.content.scrollToBottom();
                    _this.speak("I can help you explore recipes for Smoothies, Soupes, Frozen Desserts, Flours and Doughs, Dips and Spreads. Which of these are you interested in?");
                }, 2000);
                this.content.scrollToBottom();
                if (this.plt.is('ios')) {
                    var speakTimeout = setTimeout(function () {
                        _this.stopListening();
                    }, 1000);
                }
                else {
                    var speakTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 11000);
                }
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "how about recipes") {
                var hideFooterTimeout = setTimeout(function () {
                    _this.chats.push("Sure. I can help you explore by category. \n or By usage situation. Which kind of exploration would you like me to help you with?");
                    _this.content.scrollToBottom();
                    _this.speak("Sure. I can help you explore by category. \n or By usage situation. \n Which kind of exploration would you like me to help you with?");
                }, 2000);
                if (this.plt.is('ios')) {
                    var speakTimeout = setTimeout(function () {
                        _this.stopListening;
                    }, 1000);
                }
                else {
                    var speakTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 11000);
                }
            }
            else if (this.greetings.indexOf(nlpResult) > -1) {
                var hideFooterTimeout = setTimeout(function () {
                    _this.chats.push("Hello, I am Virtual Blending Assistant. How can I help you?");
                    _this.content.scrollToBottom();
                    _this.speak("Hello, I am Virtual Blending Assistant. How can I help you?");
                }, 2000);
                if (this.plt.is('ios')) {
                    var hideFooterTimeout_2 = setTimeout(function () {
                        _this.stopListening();
                    }, 1000);
                }
                else {
                    var speakTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 7000);
                }
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "can you show me smoothie recipes") {
                this.chats.push("Sure, let me check.");
                this.speak("Sure, let me check.");
                this.content.scrollToBottom();
                this.chats.push("I found four smoothie recipes. Which one you like?");
                this.content.scrollToBottom();
                this.speak("I found four smoothie recipes. Which one you like?");
                var menuTimeout = setTimeout(function () {
                    //this.chats.push("Gingered Carrot Orange Soup, \n Thai Ginger Soup with Cashews, \n Harvest Cheddar Soup, \n Jackfruit Soup, \n Tortilla Soup, \n Tomato Soup, \n and Buckwheat Black Bean Soup \n Which one you like?");
                    _this.menu = [];
                    _this.menu.push("&#8226;Perfect Summer Smoothie<br>&#8226;Vitamix Triple Berry Smoothie<br>&#8226;Vitamix Green Smoothie<br>&#8226;Mango Delight Smoothie");
                    _this.chats.push(_this.menu);
                    _this.content.scrollToBottom();
                    _this.content.scrollToBottom();
                }, 3000);
                if (this.plt.is('ios')) {
                    var speakTimeout = setTimeout(function () {
                        _this.stopListening();
                    }, 1000);
                }
                else {
                    var speakTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 15000);
                }
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "perfect summer smoothie") {
                // this.playvideo("SrC3kHkHks8");
                console.log("perfect summer smoothie");
                this.speak("Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.youtube.openVideo('SrC3kHkHks8');
                }, 2000);
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "vitamix triple berry smoothie") {
                // this.playvideo("SrC3kHkHks8");
                console.log("vitamix triple berry smoothie");
                this.speak("Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.youtube.openVideo('0mj1S4sczWw');
                }, 2000);
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "vitamix green smoothie") {
                console.log("vitamix green smoothie");
                this.speak("Playing " + nlpResult);
                // this.playvideo("SrC3kHkHks8");
                var hideFooterTimeout = setTimeout(function () {
                    _this.youtube.openVideo('K1dx4wtYxcE');
                }, 2000);
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "mango delight smoothie") {
                console.log("mango delight smoothie");
                this.speak("Playing " + nlpResult);
                // this.playvideo("SrC3kHkHks8");
                var hideFooterTimeout = setTimeout(function () {
                    _this.youtube.openVideo('YA_LAWlyL84');
                }, 2000);
            }
            else if (this.recipes.indexOf(nlpResult) > -1 && nlpResult === "vitamix site") {
                // this.playvideo("SrC3kHkHks8");
                console.log("vitamix site");
                this.speak("Playing " + nlpResult);
                var hideFooterTimeout = setTimeout(function () {
                    _this.youtube.openVideo('U-QAnbDUU00');
                }, 2000);
            }
            else {
                this.chats.push("Sorry, I did not understand you. Please say again.");
                this.content.scrollToBottom();
                this.speak("Sorry, I did not understand you. Please say again.");
                if (this.plt.is('ios')) {
                    var speakTimeout = setTimeout(function () {
                        _this.stopListening();
                    }, 1000);
                }
                else {
                    var hideFooterTimeout = setTimeout(function () {
                        _this.startListening();
                    }, 4000);
                }
            }
        }
        this.data.message = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Chat with us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <!-- <ion-list class="bottom-margin">\n        <ion-item *ngFor="let chat of chats" no-lines>\n            <div text-right class="container">\n              <img src="../../assets/imgs/icon.png" alt="Avatar" style="width:50%;">\n              <p text-justify text-wrap>{{chat}}</p>\n            </div>\n        </ion-item>\n    </ion-list> -->\n\n    <!-- <div text-right class="container" *ngFor="let chat of chats">\n      <img src="../../assets/imgs/icon.png" alt="Avatar" style="width:50%;">\n      <span text-right text-wrap>{{chat}}</span>\n    </div> -->\n\n    <ion-list class="container">\n      <ion-item *ngFor="let chat of chats">\n        <ion-avatar item-start>\n          <img src="../../assets/imgs/icon.png">\n        </ion-avatar>\n        <h2><b>Vitamix</b></h2>\n        <span text-right text-wrap [innerHTML] ="chat"></span>\n      </ion-item>\n    </ion-list>\n\n    <!-- <div text-right class="container-menu" *ngIf="menu?.length > 0">\n      <span text-right text-wrap *ngFor="let menu of menu">{{menu}}<br/><br/></span>\n\n    </div> -->\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n        <ion-col col-1 (click)="startListening()">\n            <ion-icon name="ios-mic"></ion-icon>\n        </ion-col>\n      <ion-col col-10>\n          <ion-input type="text" placeholder="Type your message" [(ngModel)]="data.message" [color]="isRecording ? \'danger\' : \'\'"></ion-input>\n      </ion-col>\n      <ion-col col-1 (click)="sendMessage(data.message)">\n        <ion-icon name="paper-plane"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__["a" /* SpeechRecognition */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_maintenance_maintenance__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(appCtrl, navCtrl, navParams, loadingCtrl) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.gotoMaintenancePage = function () {
        console.log("Aditya: Go to Maitainence Page");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_maintenance_maintenance__["a" /* MaintenancePage */]);
    };
    DashboardPage.prototype.logout = function () {
        console.log("Aditya: Logout");
        var loader = this.loadingCtrl.create({
            content: "Logging out...",
            duration: 3000
        });
        loader.present();
        this.appCtrl.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 ion-text style="font-weight: bold">Hi there, Amy</h1>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-5>\n        <img class="circle-img" src="https://www.vitamix.com/media/recipe/rcpFourFruitSmoothie/images/500xNxFour_Fruit_Smoothie_0.jpg.pagespeed.ic.Sd3Jg3tTfj.jpg">\n      </ion-col>\n      <ion-col col-7 style="padding-top: 7%">\n        <h6 ion-text style="font-size: 1.5rem; margin-top: 0.5rem">Title: Store Manager</h6>\n        <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem; font-weight: 400">Employee #: 7145768</h6>\n        <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem; font-weight: 400">Last Login: 7:43 AM</h6>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h4 ion-text style="font-weight: bold">Data Reporting</h4>\n  <h6 ion-text style="font-weight: 400">Data</h6>\n  <h6 ion-text style="font-weight: 400" (click)="gotoMaintenancePage()">Maintenance</h6>\n\n  <h4 ion-text style="font-weight: bold">Account Settings</h4>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-icon name="ios-add-circle-outline" item-start></ion-icon>\n      Legal\n    </ion-item>\n    <ion-item>\n      <ion-icon name="ios-help-buoy-outline" item-start></ion-icon>\n      Support\n    </ion-item>\n    <div (click)="logout()">\n    <ion-item>\n      <ion-icon name="ios-power-outline" item-start></ion-icon>\n      Logout\n    </ion-item>\n    </div>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintenancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_message__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recipe_recipe__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaintenancePage = /** @class */ (function () {
    function MaintenancePage(navCtrl, navParams, recipeProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeProvider = recipeProvider;
        this.recipeProvider.getMessage()
            .subscribe(function (data) {
            console.log("Aditya: Message Data: " + JSON.stringify(data));
            _this.messages = data;
        }, function (error) {
            console.log("Aditya: Message Error: " + error);
        }, function () {
        });
    }
    MaintenancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaintenancePage');
    };
    MaintenancePage.prototype.gotoMessagePage = function (message) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__message_message__["a" /* MessagePage */], { message: message });
    };
    MaintenancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-maintenance',template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/maintenance/maintenance.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Maintenance</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img style="height: 45%;width: 100%;" src="../../assets/imgs/mc.png">\n  <div *ngFor="let message of messages" (click)="gotoMessagePage(message)">\n    <h4 ion-text style="font-size: 1.7rem; margin-top: 2rem; font-weight: bold">Message from: {{message.name}}</h4>\n    <h4 ion-text style="font-weight: bold">ID:</h4>\n    <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem; font-weight: 400">{{message.id}}</h6>\n    <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem; font-weight: 400; padding-left: 1rem;">Created On:</h6>\n    <h6 ion-text style="font-size: 1rem; margin-top: -1rem; font-weight: 400; padding-left: 1rem;">{{message.createOn}}</h6>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/maintenance/maintenance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_recipe_recipe__["a" /* RecipeProvider */]])
    ], MaintenancePage);
    return MaintenancePage;
}());

//# sourceMappingURL=maintenance.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.message = this.navParams.get("message");
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('Aditya: Selected Message : ' + JSON.stringify(this.message));
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/message/message.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Message</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h5 ion-text style="font-size: 1.5rem; margin-top: 5rem">Message from device</h5>\n    <h4 ion-text style="font-weight: bold">ID:</h4>\n    <h6 ion-text style="font-size: 1rem; margin-top: -1rem; font-weight: 400">{{message.id}}</h6>\n    <h4 ion-text style="font-weight: bold">Direction:</h4>\n    <h6 ion-text style="font-size: 1rem; margin-top: -1rem; font-weight: 400;">{{message.direction}}</h6>\n    <h4 ion-text style="font-weight: bold">Maintenance:</h4>\n    <h6 ion-text style="font-size: 1rem; margin-top: -1rem; font-weight: 400;">{{message.maintenance}}</h6>\n    <h4 ion-text style="font-weight: bold">Powered Status:</h4>\n    <h6 ion-text style="font-size: 1rem; margin-top: -1rem; font-weight: 400;">{{message.poweredStatus}}</h6>\n</ion-content>\n'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/message/message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_recipe_recipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_recipe_detail_recipe_detail__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipePage = /** @class */ (function () {
    function RecipePage(navCtrl, navParams, recipeProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeProvider = recipeProvider;
        this.loadingCtrl = loadingCtrl;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
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
    RecipePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecipePage');
    };
    RecipePage.prototype.showRecipeDetailPage = function (selctedRecipe) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_recipe_detail_recipe_detail__["a" /* RecipeDetailPage */], { selctedRecipe: selctedRecipe });
    };
    RecipePage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        console.log("Aditya: getItems: " + val);
        if (val && val.trim() != '') {
            this.recipes = this.recipes.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    RecipePage.prototype.initializeItems = function () {
        this.recipes = this.filteredRecipes;
    };
    RecipePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipe',template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/recipe/recipe.html"*/'<!--\n  Generated template for the RecipePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Recipes</ion-title>\n  </ion-navbar>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <ion-grid>\n    <ion-row *ngFor="let recipe of recipes" (click)="showRecipeDetailPage(recipe)">\n      <!-- <ion-col col-6 *ngFor="let recipe of recipes" (click)="showRecipeDetailPage(recipe)"> -->\n        <ion-col><img src={{recipe.image_url}}></ion-col>\n        <ion-col>\n          <h5 ion-text style="text-align: center; margin-top: 0.6rem !important;">{{recipe.title}}</h5>\n          <h6 ion-text style="text-align: center; margin-top: 0.6rem !important;font-size: 10px;">{{recipe.description}}</h6>\n          </ion-col>\n      <!-- </ion-col> -->\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/recipe/recipe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_recipe_recipe__["a" /* RecipeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], RecipePage);
    return RecipePage;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeDetailPage = /** @class */ (function () {
    function RecipeDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.recipeDetail = this.navParams.get("selctedRecipe");
    }
    RecipeDetailPage.prototype.ionViewDidLoad = function () {
        var ingredient = this.recipeDetail.ingredients;
        this.ingredients = ingredient.split('#');
    };
    RecipeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recipe-detail',template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/recipe-detail/recipe-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Recipe</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <img style="height: 45%;width: 100%;" src={{recipeDetail.image_url}}>\n  <h4 ion-text style="font-size: 1.7rem">{{recipeDetail.title}}</h4>\n  <div style="padding-left: 20px">\n    <h5 ion-text style="font-size: 1.5rem">Description</h5>\n    <h6 ion-text style="font-size: 1.2rem">{{recipeDetail.description}}</h6>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          Yield:\n          <br>\n          <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem">{{recipeDetail.Yield}}</h6>\n        </ion-col>\n        <ion-col col-4>Difficulty:\n          <br>\n          <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem">{{recipeDetail.Difficulty}}</h6>\n        </ion-col>\n        <ion-col col-4>Time:\n          <br>\n          <h6 ion-text style="font-size: 1rem; margin-top: 0.5rem">{{recipeDetail["Total Time"]}}</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <h4 ion-text style="font-size: 1.5rem">Ingredients</h4>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 *ngFor="let ingredient of ingredients">\n        <h6 ion-text style="font-size: 1rem;">{{ingredient}}</h6>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/recipe-detail/recipe-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RecipeDetailPage);
    return RecipeDetailPage;
}());

//# sourceMappingURL=recipe-detail.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blender-detail/blender-detail.module": [
		445,
		8
	],
	"../pages/blenders/blenders.module": [
		446,
		7
	],
	"../pages/chat/chat.module": [
		447,
		6
	],
	"../pages/dashboard/dashboard.module": [
		448,
		5
	],
	"../pages/login/login.module": [
		449,
		4
	],
	"../pages/maintenance/maintenance.module": [
		450,
		3
	],
	"../pages/message/message.module": [
		451,
		2
	],
	"../pages/recipe-detail/recipe-detail.module": [
		452,
		1
	],
	"../pages/recipe/recipe.module": [
		453,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blenders_blenders__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_recipe__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__recipe_recipe__["a" /* RecipePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__blenders_blenders__["a" /* BlendersPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__["a" /* DashboardPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Recipes" tabIcon="ios-restaurant-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Blenders" tabIcon="ios-aperture-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Dashboard" tabIcon="ios-stats-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Chat" tabIcon="ios-chatbubbles"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_recipe_recipe__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_blenders_blenders__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_recipe_detail_recipe_detail__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_blender_detail_blender_detail__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_maintenance_maintenance__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_message_message__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_recipe_recipe__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_youtube_video_player__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_speech_recognition__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_text_to_speech__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_blenders_blenders__["a" /* BlendersPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_recipe_detail_recipe_detail__["a" /* RecipeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_blender_detail_blender_detail__["a" /* BlenderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_maintenance_maintenance__["a" /* MaintenancePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/blender-detail/blender-detail.module#BlenderDetailPageModule', name: 'BlenderDetailPage', segment: 'blender-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/blenders/blenders.module#BlendersPageModule', name: 'BlendersPage', segment: 'blenders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maintenance/maintenance.module#MaintenancePageModule', name: 'MaintenancePage', segment: 'maintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipe-detail/recipe-detail.module#RecipeDetailPageModule', name: 'RecipeDetailPage', segment: 'recipe-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recipe/recipe.module#RecipePageModule', name: 'RecipePage', segment: 'recipe', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_blenders_blenders__["a" /* BlendersPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_recipe_recipe__["a" /* RecipePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_recipe_detail_recipe_detail__["a" /* RecipeDetailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_blender_detail_blender_detail__["a" /* BlenderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_maintenance_maintenance__["a" /* MaintenancePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_http__["a" /* HTTP */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_recipe_recipe__["a" /* RecipeProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_text_to_speech__["a" /* TextToSpeech */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';


var config = {
    apiKey: 'AIzaSyDkeaweqJxnXnzuzOudFOVJ5RZY9Ll26l8',
    authDomain: 'chatserver-8fb44.firebaseapp.com',
    databaseURL: 'https://chatserver-8fb44.firebaseio.com',
    projectId: 'chatserver-8fb44',
    storageBucket: 'chatserver-8fb44.appspot.com',
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_5_firebase__["initializeApp"](config);
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipeProvider = /** @class */ (function () {
    function RecipeProvider(http, https) {
        this.http = http;
        this.https = https;
        console.log('Hello RecipeProvider Provider');
    }
    RecipeProvider.prototype.getMessage = function () {
        // let receipeURL = "assets/json/message.json";
        // this.http.setHeader('*','Access-Control-Allow-Origin','*');
        // return this.http.get(receipeURL, null, null);
        return this.https.post("assets/json/message.json", null, null)
            .map(function (res) { return res.json(); });
    };
    RecipeProvider.prototype.getReceipe = function () {
        var receipeURL = "https://6CF2BCEC6C334E8DB6378E18FEAE1D05.mobile.ocp.oraclecloud.com:443/mobile/custom/VitamixCustomAPI2/recipeData";
        this.http.setHeader('*', 'Access-Control-Allow-Origin', '*');
        this.http.setHeader('*', 'Authorization', 'Basic Z2lyaXNoLmZ1bHVza2FyQGxudGluZm90ZWNoLmNvbTpOZXd1c2VyMTIzNDU2Nzg5MA==');
        this.http.setHeader('*', 'Oracle-Mobile-Backend-Id', '4752a39d-ffed-43ce-9f7c-f5e80b047f09');
        return this.http.get(receipeURL, null, null);
    };
    RecipeProvider.prototype.getBlender = function () {
        var receipeURL = "https://6CF2BCEC6C334E8DB6378E18FEAE1D05.mobile.ocp.oraclecloud.com:443/mobile/custom/VitamixCustomAPI2/getBlenders";
        this.http.setHeader('*', 'Access-Control-Allow-Origin', '*');
        this.http.setHeader('*', 'Authorization', 'Basic Z2lyaXNoLmZ1bHVza2FyQGxudGluZm90ZWNoLmNvbTpOZXd1c2VyMTIzNDU2Nzg5MA==');
        this.http.setHeader('*', 'Oracle-Mobile-Backend-Id', '4752a39d-ffed-43ce-9f7c-f5e80b047f09');
        return this.http.get(receipeURL, null, null);
    };
    RecipeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], RecipeProvider);
    return RecipeProvider;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        if (this.username == '' || this.username == undefined || this.password == '' || this.password == undefined) {
            var toast = this.toastCtrl.create({
                message: 'Username or password cannot be empty',
                duration: 3000
            });
            toast.present();
        }
        else {
            var loader = this.loadingCtrl.create({
                content: "Signing In...",
                duration: 3000
            });
            loader.present();
            var self = this;
            setTimeout(function () {
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
            }, 3000);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/login/login.html"*/'<ion-content padding>\n  <ion-row class="logo-row" style="margin-top: 10%;">\n    <ion-col style="justify-content: center; display: flex;">\n      <img src="../../assets/imgs/Vitamix_slogan.jpg" style="width:70%; height: 100%" alt="logo">\n    </ion-col>\n  </ion-row> \n  <ion-row class="logo-row">\n      <ion-col style="justify-content: center; display: flex;">\n          <img src="../../assets/imgs/Vitamix_micro.jpg" style="width:100%; height: 100%" alt="logo">\n        </ion-col>\n  </ion-row>\n    \n    \n    <div style="margin-top: 10%;">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n                <ion-item>\n                  <ion-label color="primary" style="flex: 0 0 20px; width: 10px; min-width: 10px;" fixed>\n                    <ion-icon name="person"></ion-icon>\n                  </ion-label>\n                  <ion-input type="text" placeholder="Username" [(ngModel)]="username"></ion-input>\n                </ion-item>\n            \n                <ion-item>\n                  <ion-label color="primary" style="flex: 0 0 20px; width: 10px; min-width: 10px;" fixed>\n                    <ion-icon name="lock"></ion-icon>\n                  </ion-label>\n                  <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n                </ion-item>\n\n                <ion-row style="margin-top:5%;">\n                    <ion-col col-1>\n                      <ion-checkbox></ion-checkbox>\n                    </ion-col>\n                    <ion-col col-1>\n                    </ion-col>\n                    <ion-col class="keppmeloggedin">\n                      Keep me logged in\n                    </ion-col>\n                  </ion-row>\n            \n                <div padding>\n                  <button ion-button block (click)="login()" class="loginButton">Sign In</button>\n                </div>\n              </ion-list>\n          </ion-col>\n        </ion-row>\n    </div>\n  </ion-content>\n  <ion-footer>\n      <ion-toolbar>\n        <div>\n          <ion-label class="footer">Copyrights &copy; 2018 All rights reserved</ion-label>\n        </div>\n      </ion-toolbar>\n    </ion-footer>'/*ion-inline-end:"/Users/admin/Documents/Vitamix/Ionic 3 App/VitamixIonic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[288]);
//# sourceMappingURL=main.js.map