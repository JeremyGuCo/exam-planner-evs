import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddExamComponent } from './shared/components/add-exam/add-exam.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamListModule } from './features/exam-list/exam-list.module';

@NgModule({
  declarations: [
    AppComponent,
    AddExamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ExamListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
