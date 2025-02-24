import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { AddExamComponent } from './add-exam/add-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamListComponent,
    AddExamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
