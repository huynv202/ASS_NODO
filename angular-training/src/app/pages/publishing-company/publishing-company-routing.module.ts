import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublishingCompanyComponent} from "./publishing-company.component";
import {RouterModule, Routes} from "@angular/router";


const  routes :Routes =[{path:'',component:PublishingCompanyComponent}]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports:[RouterModule]

})
export class PublishingCompanyRoutingModule { }
