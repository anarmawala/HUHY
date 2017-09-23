import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { QuestionService } from './questions.services';
import { Observable, Subscription } from 'rxjs/Rx';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ QuestionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
