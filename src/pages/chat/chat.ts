import { Component, ViewChild, SystemJsNgModuleLoader } from '@angular/core';
import { Content } from 'ionic-angular';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { timingSafeEqual } from 'crypto';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild(Content) content: Content;
  chats = [];
  menu = [];
  data = { message:'' };
  i:any;

  greetings = ['hi','hello','hey', 'hi, how are you', 'ask vitamix', 'open vitamix'];
  recipes = ['can you show me soup recipes','can you show me smoothie recipes','gingered carrot orange soup', 'thai ginger soup with cashews',
  'harvest cheddar soup', 'jackfruit soup', 'tortilla soup','tomato soup','buckwheat black bean soup',
  'can you show me smoothies recipes','how about recipes','what options do i have in recipes',
  'what are the different recipe categories','perfect summer smoothie', 'vitamix triple berry smoothie', 
  'vitamix green smoothie', 'mango delight smoothie', 'vitamix site', 'perfect summer smoothie', 
  'vitamix triple berry smoothie', 'vitamix green smoothie', 'mango delight smoothie'];

  


  isRecording = false;
  isPermission = false;
  
  stringSimilarity = require('string-similarity');

  constructor(public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer, 
    private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef, 
    private tts: TextToSpeech) {
  }

  isIos() {
    return this.plt.is('ios');
  }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
          this.isPermission = true;
        } else {
          this.isPermission = false;
        }
      });
  }

  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }

  speak(speakText){
    if(this.plt.is('ios')){
        this.tts.speak({text:speakText,locale:'en-US',rate: 1.55})
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
    } else {
        this.tts.speak({text:speakText,locale:'en-US',rate: 1})
          .then(() => console.log('Success'))
          .catch((reason: any) => console.log(reason));
    }
  }

  startListening() {
    
    this.speechRecognition.isRecognitionAvailable()
    .then((avilable:boolean) =>{
      this.speechRecognition.requestPermission()
      .then(
        () => {
          this.speechRecognition.startListening().subscribe(chat => {
            console.log("Speech Recog", chat);
            this.isRecording = true;

            this.sendMessage(chat[0].toLowerCase());
            console.log("Chat value: " + chat[0].toLowerCase());
            this.cd.detectChanges();
            this.stopListening();    
          });
          console.log('Granted');
        },
        () => console.log('Denied')
      )
    })

    //Stop Listening after 5 seconds
    // let stopListening = setTimeout(() =>{
    //   this.stopListening();
    // }, 5000);
  }



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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  sendMessage(message){
    //this.chats.push(message);
    this.content.scrollToBottom();
    //this.speak(message);

    var nlpResult = this.stringSimilarity.findBestMatch(message, this.greetings.concat(this.recipes)).bestMatch.target;
    var confidence = this.stringSimilarity.findBestMatch(message, this.greetings.concat(this.recipes)).bestMatch.rating;

    console.log("Confidence: ", this.stringSimilarity.findBestMatch(message, this.greetings.concat(this.recipes)));
    console.log("NLP Result: ", nlpResult);
    
    if(confidence < 0.1){
      this.chats.push("Sorry, I did not understand you. Please say again.");
      this.content.scrollToBottom();
        this.speak("Sorry, I did not understand you. Please say again.");
        let hideFooterTimeout = setTimeout(() =>{
          this.startListening();
        },4000);

        if(this.plt.is('ios')){
          let hideFooterTimeout = setTimeout(() =>{
            this.stopListening();
          },4000);
        }
        
    } else {
      if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "can you show me soup recipes"){
        //this.chats.push("Sure, let me check.");
        //this.speak("Sure, let me check.");
        this.content.scrollToBottom();
        
        this.chats.push("Sure, let me check.");
        this.content.scrollToBottom();
        this.speak("Sure, let me check. I found seven soup recipes. Which one you like?");
      
        let menuTimeout = setTimeout(() =>{
          //this.chats.push("Gingered Carrot Orange Soup, \n Thai Ginger Soup with Cashews, \n Harvest Cheddar Soup, \n Jackfruit Soup, \n Tortilla Soup, \n Tomato Soup, \n and Buckwheat Black Bean Soup \n Which one you like?");
          this.menu = [];
          this.menu.push("I found seven soup recipes. Which one you like? <br> &#8226; Gingered Carrot Orange Soup<br>&#8226; Thai Ginger Soup with Cashews<br>&#8226; Harvest Cheddar Soup<br>&#8226; Jackfruit Soup<br>&#8226; Tortilla Soup<br>&#8226; Tomato Soup<br>&#8226; Buckwheat Black Bean Soup"); 
          

          this.chats.push(this.menu);

          this.content.scrollToBottom();
          this.content.scrollToBottom();
          this.content.scrollToBottom();
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

        if(this.plt.is('ios')){
          let speakTimeout = setTimeout(() =>{
            this.stopListening();
          },1000);
        } else {
          let speakTimeout = setTimeout(() =>{
            this.startListening();
          },15000);
        }
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "gingered carrot orange soup"){
        // this.playvideo("SrC3kHkHks8");
        console.log("gingered carrot orange soup");
        this.chats.push("Great! Here it is.");
        this.content.scrollToBottom();
        this.speak("Great! Here it is. Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('lSFDcmr8S2Q');
        }, 2000);
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "thai ginger soup with cashews"){
        // this.playvideo("SrC3kHkHks8");
        console.log("thai ginger soup with cashews");
        this.chats.push("Great! Here it is.");
        this.content.scrollToBottom();
        this.speak("Great! Here it is. Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('B_w59q2hdjI');
        },2000);
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "harvest cheddar soup"){
        // this.playvideo("SrC3kHkHks8");
        console.log("harvest cheddar soup");
        this.chats.push("Great! Here it is.");
        this.content.scrollToBottom();
        this.speak("Great! Here it is. Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.speak("Sorry! No video available for " + nlpResult);
        },2000);

        if(this.plt.is('ios')){
          let speakTimeout = setTimeout(() =>{
            this.stopListening();
          },1000);
        } else {
          let speakTimeout = setTimeout(() =>{
            this.startListening();
          },7000);
        }
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "jackfruit soup"){
        // this.playvideo("SrC3kHkHks8");
        console.log("Jackfruit Soup");
        this.chats.push("Great! Here it is.");
        this.content.scrollToBottom();
        this.speak("Great! Here it is. Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.speak("Sorry! No video available for " + nlpResult);
        },2000);

        if(this.plt.is('ios')){
          let speakTimeout = setTimeout(() =>{
            this.stopListening();
          },1000);
        } else {
          let speakTimeout = setTimeout(() =>{
            this.startListening();
          },7000);
        }
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "tortilla soup"){
        // this.playvideo("SrC3kHkHks8");
        console.log("Tortilla Soup");
        this.chats.push("Great! Here it is.");
        this.content.scrollToBottom();
        this.speak("Great! Here it is. Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('T8rh3dR2xyc');
        },2000);
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "tomato soup"){
        // this.playvideo("SrC3kHkHks8");
        console.log("Tomato Soup");
        this.chats.push("Great! Here it is.");
        this.content.scrollToBottom();
        this.speak("Great! Here it is. Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.speak("Sorry! No video available for " + nlpResult);
        },2000);

        if(this.plt.is('ios')){
          let speakTimeout = setTimeout(() =>{
            this.stopListening();
          },1000);
        } else {
          let speakTimeout = setTimeout(() =>{
            this.startListening();
          },7000);
        }
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "buckwheat black bean soup"){
        // this.playvideo("SrC3kHkHks8");
        console.log("Buckwheat Black Bean Soup");
        this.chats.push("Great! Here it is.");
        this.content.scrollToBottom();
        this.speak("Great! Here it is. Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.speak("Sorry! No video available for " + nlpResult);
        },2000);

        if(this.plt.is('ios')){
          let speakTimeout = setTimeout(() =>{
            this.stopListening();
          },1000);
        } else {
          let speakTimeout = setTimeout(() =>{
            this.startListening();
          },7000);
        }
      }else if(this.recipes.indexOf(nlpResult) > -1 && (nlpResult === "what options do i have in recipes" || nlpResult === "what are the different recipe categories")){
        let hideFooterTimeout = setTimeout(()=>{
          //this.chats.push("I can help you explore recipes for \n Smoothies, \n Soupes, \n Frozen Desserts, \n Flours and Doughs, \n Dips and Spreads. \n Which of these are you interested in?");
          this.menu = [];

          this.menu.push("I can help you explore recipes for<br>&#8226; Smoothies<br>&#8226; Soupes<br>&#8226; Frozen Desserts<br>&#8226; Flours and Doughs<br>&#8226; Dips and Spreads<br>Which of these are you interested in?");


          this.chats.push(this.menu);

          this.content.scrollToBottom();
          this.content.scrollToBottom();
          this.speak("I can help you explore recipes for Smoothies, Soupes, Frozen Desserts, Flours and Doughs, Dips and Spreads. Which of these are you interested in?");
        },2000);
        this.content.scrollToBottom();

        if(this.plt.is('ios')){
          let speakTimeout = setTimeout(() =>{
            this.stopListening();
          },1000);
        } else{
          let speakTimeout = setTimeout(() =>{
            this.startListening();
          },11000);
        }

        
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "how about recipes"){
        let hideFooterTimeout = setTimeout(()=>{
          this.chats.push("Sure. I can help you explore by category. \n or By usage situation. Which kind of exploration would you like me to help you with?");
          this.content.scrollToBottom();
          this.speak("Sure. I can help you explore by category. \n or By usage situation. \n Which kind of exploration would you like me to help you with?");
        },2000);

        if(this.plt.is('ios')){
          let speakTimeout = setTimeout(() =>{
            this.stopListening;
          },1000);  
        } else{
          let speakTimeout = setTimeout(() =>{
            this.startListening();
          },11000);
        }
      }else if(this.greetings.indexOf(nlpResult) > -1){
        let hideFooterTimeout = setTimeout(()=>{
          this.chats.push("Hello, I am Virtual Blending Assistant. How can I help you?");
          this.content.scrollToBottom();
          this.speak("Hello, I am Virtual Blending Assistant. How can I help you?");
        },2000);
        
        
        if(this.plt.is('ios')){
          let hideFooterTimeout = setTimeout(() =>{
            this.stopListening();
          },1000);
        } else {
          let speakTimeout = setTimeout(() =>{
            this.startListening();
          },7000);
        }
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "can you show me smoothie recipes"){
        this.chats.push("Sure, let me check.");
        this.speak("Sure, let me check.");
        this.content.scrollToBottom();
        
        this.chats.push("I found four smoothie recipes. Which one you like?");
        this.content.scrollToBottom();
        this.speak("I found four smoothie recipes. Which one you like?");
      
        let menuTimeout = setTimeout(() =>{
          //this.chats.push("Gingered Carrot Orange Soup, \n Thai Ginger Soup with Cashews, \n Harvest Cheddar Soup, \n Jackfruit Soup, \n Tortilla Soup, \n Tomato Soup, \n and Buckwheat Black Bean Soup \n Which one you like?");
          this.menu = [];
          this.menu.push("&#8226;Perfect Summer Smoothie<br>&#8226;Vitamix Triple Berry Smoothie<br>&#8226;Vitamix Green Smoothie<br>&#8226;Mango Delight Smoothie"); 
          
          this.chats.push(this.menu);

          this.content.scrollToBottom();
          this.content.scrollToBottom();
        }, 3000);
        
        if(this.plt.is('ios')){
          let speakTimeout = setTimeout(() =>{
            this.stopListening();
          },1000);
        } else {
          let speakTimeout = setTimeout(() =>{
            this.startListening();
          },15000);
        }
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "perfect summer smoothie"){
        // this.playvideo("SrC3kHkHks8");
        console.log("perfect summer smoothie");
        this.speak("Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('SrC3kHkHks8');
        },2000);
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "vitamix triple berry smoothie"){
        // this.playvideo("SrC3kHkHks8");
        console.log("vitamix triple berry smoothie");
        this.speak("Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('0mj1S4sczWw');
        },2000);
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "vitamix green smoothie"){
        console.log("vitamix green smoothie");
        this.speak("Playing " + nlpResult);
        // this.playvideo("SrC3kHkHks8");
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('K1dx4wtYxcE');
        },2000);
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "mango delight smoothie"){

        console.log("mango delight smoothie");
        this.speak("Playing " + nlpResult);
        // this.playvideo("SrC3kHkHks8");
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('YA_LAWlyL84');
        },2000);
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "vitamix site"){
        // this.playvideo("SrC3kHkHks8");
        console.log("vitamix site");
        this.speak("Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('U-QAnbDUU00');
        },2000);
      } else {
        this.chats.push("Sorry, I did not understand you. Please say again.");
        this.content.scrollToBottom();
          this.speak("Sorry, I did not understand you. Please say again.");
          
          if(this.plt.is('ios')){
            let speakTimeout = setTimeout(() =>{
              this.stopListening();
            },1000);
          } else {
            let hideFooterTimeout = setTimeout(() =>{
              this.startListening();
            },4000);
          }
          
      } 
    } 
    this.data.message = '';
  }

}
