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

  greetings = ['hi','hello','hey'];
  recipes = ['perfect summer smoothie', 'vitamix triple berry smoothie', 'vitamix green smoothie', 'mango delight smoothie', 'vitamix site'];

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

            for(this.i = 0; this.i < this.greetings.length; this.i++){
              console.log("Inside Loop");
              if(this.greetings[this.i] === this.stringSimilarity.findBestMatch(this.greetings[this.i],chat).bestMatch.target){
                console.log("Here", this.stringSimilarity.findBestMatch(this.greetings[this.i],chat).bestMatch.target);

                var reply = this.stringSimilarity.findBestMatch(this.greetings[this.i],chat).bestMatch.target;
          
                //this.chats = chat;
                //this.chats.push(reply);
                this.sendMessage(reply);
                this.cd.detectChanges();
                break;

              } else if(this.recipes[this.i] === this.stringSimilarity.findBestMatch(this.recipes[this.i],chat).bestMatch.target){
                console.log("Here in else ", this.stringSimilarity.findBestMatch(this.recipes[this.i],chat).bestMatch.target);

                var reply = this.stringSimilarity.findBestMatch(this.recipes[this.i],chat).bestMatch.target;
          
                //this.chats = chat;
                //this.chats.push(reply);
                this.sendMessage(reply);
                this.cd.detectChanges();
                break;
              }   
            }
            this.stopListening();    
          });
          console.log('Granted');
        },
        () => console.log('Denied')
      )
    })

    //Stop Listening after 5 seconds
    let stopListening = setTimeout(() =>{
      this.stopListening();
    }, 5000);
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
    this.speak(message);
    if(message === "hi"){
      let hideFooterTimeout = setTimeout(()=>{
        this.chats.push("Hello, I am VitaBot. Let's cook.");
        this.speak("Hello, I am VitaBot. Let's cook.");
      },3000);
    } else if(message === "perfect summer smoothie"){
      // this.playvideo("SrC3kHkHks8");
      console.log("perfect summer smoothie");
      this.speak("Playing " + message);
      let hideFooterTimeout = setTimeout(() =>{
        this.youtube.openVideo('SrC3kHkHks8');
      }, 3000);
    } else if(message === "vitamix triple berry smoothie"){
      // this.playvideo("SrC3kHkHks8");
      console.log("vitamix triple berry smoothie");
      this.speak("Playing " + message);
      let hideFooterTimeout = setTimeout(() =>{
        this.youtube.openVideo('0mj1S4sczWw');
      }, 3000);
    } else if(message === "vitamix green smoothie"){
      console.log("vitamix green smoothie");
      this.speak("Playing " + message);
      // this.playvideo("SrC3kHkHks8");
      let hideFooterTimeout = setTimeout(() =>{
        this.youtube.openVideo('K1dx4wtYxcE');
      }, 3000);
    } else if(message === "mango delight smoothie"){

      console.log("mango delight smoothie");
      this.speak("Playing " + message);
      // this.playvideo("SrC3kHkHks8");
      let hideFooterTimeout = setTimeout(() =>{
        this.youtube.openVideo('YA_LAWlyL84');
      }, 3000);
    } else if(message === "vitamix site"){
      // this.playvideo("SrC3kHkHks8");
      console.log("vitamix site");
      this.speak("Playing " + message);


      let hideFooterTimeout = setTimeout(() =>{
        this.youtube.openVideo('U-QAnbDUU00');
      }, 3000);
    } 
    this.data.message = '';
  }

}
