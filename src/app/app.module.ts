import {NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GenderLabelPipePipe } from './gender-label-pipe.pipe';
@NgModule({
imports: [ BrowserModule, FormsModule ],
declarations: [ AppComponent, GenderLabelPipePipe ],
bootstrap: [ AppComponent ]
})
export class AppModule {}