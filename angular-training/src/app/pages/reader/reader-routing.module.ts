import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReaderComponent} from "./reader.component";


const routes : Routes = [{path:'',component:ReaderComponent}]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class ReaderRoutingModule { }
