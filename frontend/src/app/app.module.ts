import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { FullnamePipe } from './pipes/fullname.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ItalicIfPendingDirective } from './directives/italic-if-pending.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExamListComponent,
    AddExamComponent,
    FullnamePipe,
    ItalicIfPendingDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
