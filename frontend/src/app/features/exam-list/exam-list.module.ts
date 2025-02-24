import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamListComponent } from './components/exam-list.component';
import { StatusMappingService } from './services/status-mapping.service';
import { ItalicIfPendingDirective } from 'src/app/shared/directives/italic-if-pending.directive';
import { FullnamePipe } from 'src/app/shared/pipes/fullname.pipe';

@NgModule({
  declarations: [
    ExamListComponent,
    FullnamePipe,
    ItalicIfPendingDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
    StatusMappingService
  ],
  exports: [
    ExamListComponent
  ]
})
export class ExamListModule { }
