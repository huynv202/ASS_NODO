import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookBorrowComponent} from "./book-borrow.component";
import {BookBorrowService} from "../../shared/services/book-borrow.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../shared/shared.module";
import {FormModule} from "../../components/forms/forms.module";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MatSelectModule} from "@angular/material/select";
import {BookBorrowRoutingModule} from "./book-borrow-routing.module";



@NgModule({
  declarations: [BookBorrowComponent],
  imports: [
    CommonModule,
    BookBorrowRoutingModule,
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
    providers :[BookBorrowService]
})
export class BookBorrowModule { }
