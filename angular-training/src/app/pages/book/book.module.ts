import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from "./book.component";
import {BookRoutingModule} from "./book-routing.module";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FormModule} from "../../components/forms/forms.module";
import {BookService} from "../../shared/services/book.service";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [BookComponent],
    imports: [
        CommonModule,
        BookRoutingModule,
        MatExpansionModule,
        MatFormFieldModule,
        SharedModule,
        FormModule,
        MatInputModule,
        ReactiveFormsModule,
        MatRadioModule,
        NgxDatatableModule,
        MatSelectModule,
        FormsModule
    ],
    providers :[BookService]
})
export class BookModule { }
