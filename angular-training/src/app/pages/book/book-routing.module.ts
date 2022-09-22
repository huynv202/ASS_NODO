import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule, Routes} from "@angular/router";
import {BookComponent} from "./book.component";


const routes :Routes =[{path:'',component:BookComponent}]
@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class BookRoutingModule { }
