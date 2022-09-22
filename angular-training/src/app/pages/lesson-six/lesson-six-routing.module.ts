import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LessonSixComponent } from './lesson-six.component';

const routes: Routes = [{ path: '', component: LessonSixComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LessonSixRoutingModule {}
