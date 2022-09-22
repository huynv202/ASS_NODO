import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookBorrowComponent} from "./book-borrow.component";
import {Router, RouterModule, Routes} from "@angular/router";


const routes: Routes = [{ path: '', component: BookBorrowComponent }];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],

    exports: [RouterModule]
})
export class BookBorrowRoutingModule { }
