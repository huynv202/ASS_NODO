import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonSixComponent } from './lesson-six.component';
import { LessonSixRoutingModule } from './lesson-six-routing.module';

@NgModule({
    declarations: [LessonSixComponent],
    imports: [CommonModule, LessonSixRoutingModule],
})
export class LessonSixModule {}
