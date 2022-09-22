import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReaderComponent} from "./reader.component";
import {ReaderRoutingModule} from "./reader-routing.module";
import {ReaderService} from "../../shared/services/reader.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {FormModule} from "../../components/forms/forms.module";
import {MatRadioModule} from "@angular/material/radio";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";



@NgModule({
  declarations: [ReaderComponent],
    imports: [
        CommonModule,
        ReaderRoutingModule,
        MatExpansionModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        SharedModule,
        MatInputModule,
        FormModule,
        MatRadioModule,
        NgxDatatableModule
    ],
    providers :[ReaderService]
})
export class ReaderModule { }
