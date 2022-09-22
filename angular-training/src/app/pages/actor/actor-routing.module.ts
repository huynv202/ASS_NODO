import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActorComponent} from "./actor.component";
import {RouterModule, Routes} from "@angular/router";


const routes :Routes =[{path:'',component:ActorComponent}]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ActorRoutingModule { }
