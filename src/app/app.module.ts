import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';


import { RecipePage } from '../pages/recipe/recipe';
import { BlendersPage } from '../pages/blenders/blenders';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TabsPage } from '../pages/tabs/tabs';
import { RecipeDetailPage } from '../pages/recipe-detail/recipe-detail';
import { BlenderDetailPage } from '../pages/blender-detail/blender-detail';
import { MaintenancePage } from '../pages/maintenance/maintenance';
import { MessagePage } from '../pages/message/message';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecipeProvider } from '../providers/recipe/recipe';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@NgModule({
  declarations: [
    MyApp,
    BlendersPage,
    DashboardPage,
    RecipePage,
    TabsPage,
    RecipeDetailPage,
    BlenderDetailPage,
    MaintenancePage,
    MessagePage,
    LoginPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BlendersPage,
    DashboardPage,
    RecipePage,
    TabsPage,
    RecipeDetailPage,
    BlenderDetailPage,
    MaintenancePage,
    MessagePage,
    LoginPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipeProvider,
    YoutubeVideoPlayer,
    SpeechRecognition,
    TextToSpeech
  ]
})
export class AppModule {}
