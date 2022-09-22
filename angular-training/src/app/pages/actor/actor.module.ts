import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from "@angular/material/expansion";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {FormModule} from "../../components/forms/forms.module";
import {MatRadioModule} from "@angular/material/radio";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ActorRoutingModule} from "./actor-routing.module";
import {ActorService} from "../../shared/services/actor.service";
import {ActorComponent} from "./actor.component";



@NgModule({
  declarations: [ActorComponent],
  imports: [
    CommonModule,
      ActorRoutingModule,
      MatExpansionModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      SharedModule,
      MatInputModule,
      FormModule,
      MatRadioModule,
      NgxDatatableModule
  ],
    providers :[ActorService]
})
export class ActorModule { }
