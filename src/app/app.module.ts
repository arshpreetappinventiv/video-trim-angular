import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderRangeComponent } from './video-trimmer/components/slider-range/slider-range.component';
import { VideoTrimmerComponent } from './video-trimmer/video-trimmer.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoTrimmerComponent,
    SliderRangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
