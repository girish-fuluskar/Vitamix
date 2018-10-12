import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlendersPage } from './blenders';

@NgModule({
  declarations: [
    BlendersPage,
  ],
  imports: [
    IonicPageModule.forChild(BlendersPage),
  ],
})
export class BlendersPageModule {}
