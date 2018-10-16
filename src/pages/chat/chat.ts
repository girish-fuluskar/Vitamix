import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { ChangeDetectorRef } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';

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
  chats = [];
  data = { message:'' };
  i:any;

  greetings = ['hi','hello','hey', 'hi, how are you', 'ask vitamix', 'open vitamix'];
  recipes = ['can you show me soup recipes','gingered carrot orange soup', 'thai ginger soup with cashews','harvest cheddar soup', 'jackfruit soup', 'tortilla soup','can you show me smoothies recipes','how about recipes','what options do i have in recipes','what are the different recipe categories','perfect summer smoothie', 'vitamix triple berry smoothie', 'vitamix green smoothie', 'mango delight smoothie', 'vitamix site'];

  


  isRecording = false;
  isPermission = false;
  
  stringSimilarity = require('string-similarity');

  constructor(public navCtrl: NavController, public navParams: NavParams, private youtube: YoutubeVideoPlayer, private speechRecognition: SpeechRecognition, private plt: Platform, private cd: ChangeDetectorRef, private tts: TextToSpeech) {
    
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

  speak(text){
    this.tts.speak(text)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
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
    this.chats.push(message);
    //this.speak(message);

    var nlpResult = this.stringSimilarity.findBestMatch(message, this.greetings.concat(this.recipes)).bestMatch.target;
    var confidence = this.stringSimilarity.findBestMatch(message, this.greetings.concat(this.recipes)).bestMatch.rating;

    console.log("Confidence: ", this.stringSimilarity.findBestMatch(message, this.greetings.concat(this.recipes)));
    console.log("NLP Result: ", nlpResult);
    
    if(confidence < 0.1){
      this.chats.push("Sorry, I did not understand you. Please say again.");
        this.speak("Sorry, I did not understand you. Please say again.");
        let hideFooterTimeout = setTimeout(() =>{
          this.startListening();
        }, 4000);
        
    } else {
      if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "can you show me soup recipes"){
        let hideFooterTimeout = setTimeout(()=>{
          this.chats.push("Sure, let me check.");
          let hideFooterTimeout = setTimeout(()=>{
            this.speak("Sure, let me check.");
          }, 1000);

          let hideFooterTimeout1 = setTimeout(()=>{
            this.chats.push("I found five soup recipes.");
            this.speak("I found five soup recipes.");
          }, 1000);
          
          
          
          this.chats.push("Gingered Carrot Orange Soup");
          this.chats.push("Thai Ginger Soup with Cashews");
          this.chats.push("Harvest Cheddar Soup");
          this.chats.push("Jackfruit Soup");
          this.chats.push("Tortilla Soup");
          this.chats.push("Which one you like?");
          this.speak("Which one you like?");
        },3000);
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "gingered carrot orange soup"){
        // this.playvideo("SrC3kHkHks8");
        console.log("gingered carrot orange soup");
        this.chats.push("Great! Here it is.")
        this.speak("Great! Here it is. Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('ISFDcmr8S2Q');
        }, 3000);
      }else if(this.recipes.indexOf(nlpResult) > -1 && (nlpResult === "what options do i have in recipes" || nlpResult === "what are the different recipe categories")){
        let hideFooterTimeout = setTimeout(()=>{
          this.chats.push("I can help you explore recipes for Smoothies, Soupes, Frozen Desserts, Flours and Doughs, Dips and Spreads. Which of these are you interested in?");
          this.speak("I can help you explore recipes for Smoothies, Soupes, Frozen Desserts, Flours and Doughs, Dips and Spreads. Which of these are you interested in?");
        },3000);
      }else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "how about recipes"){
        let hideFooterTimeout = setTimeout(()=>{
          this.chats.push("Humm..I can help you explore by category. \n or By usage situation. \n Which kind of exploration would you like me to help you with?");
          this.speak("Humm..I can help you explore by category. \n or By usage situation. \n Which kind of exploration would you like me to help you with?");
        },3000);
      }else if(this.greetings.indexOf(nlpResult) > -1){
        let hideFooterTimeout = setTimeout(()=>{
          this.chats.push("Hello, I am Virtual Blending Assistant. How can I help you?");
          this.speak("Hello, I am Virtual Blending Assistant. How can I help you?");
        },3000);
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "perfect summer smoothie"){
        // this.playvideo("SrC3kHkHks8");
        console.log("perfect summer smoothie");
        this.speak("Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('SrC3kHkHks8');
        }, 3000);
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "vitamix triple berry smoothie"){
        // this.playvideo("SrC3kHkHks8");
        console.log("vitamix triple berry smoothie");
        this.speak("Playing " + nlpResult);
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('0mj1S4sczWw');
        }, 3000);
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "vitamix green smoothie"){
        console.log("vitamix green smoothie");
        this.speak("Playing " + nlpResult);
        // this.playvideo("SrC3kHkHks8");
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('K1dx4wtYxcE');
        }, 3000);
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "mango delight smoothie"){

        console.log("mango delight smoothie");
        this.speak("Playing " + nlpResult);
        // this.playvideo("SrC3kHkHks8");
        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('YA_LAWlyL84');
        }, 3000);
      } else if(this.recipes.indexOf(nlpResult) > -1 && nlpResult === "vitamix site"){
        // this.playvideo("SrC3kHkHks8");
        console.log("vitamix site");
        this.speak("Playing " + nlpResult);


        let hideFooterTimeout = setTimeout(() =>{
          this.youtube.openVideo('U-QAnbDUU00');
        }, 2000);
      }
    } 
    this.data.message = '';
  }

}
