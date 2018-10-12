import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlenderDetailPage } from './blender-detail';

@NgModule({
  declarations: [
    BlenderDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BlenderDetailPage),
  ],
})
export class BlenderDetailPageModule {}
