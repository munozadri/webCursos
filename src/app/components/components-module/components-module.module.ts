import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { VideoPlayerComponent } from 'src/app/pages/courses/component/video-player/video-player.component';

@NgModule({
  declarations: [
    HeaderComponent, 
    VideoPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    HeaderComponent,
    VideoPlayerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModuleModule { }
