import { Component, OnInit } from '@angular/core';
import {Page} from "../../shared/model/page";
import {FormBuilder} from "@angular/forms";
import {BookBorrowService} from "../../shared/services/book-borrow.service";
import {ToastrService} from "ngx-toastr";
import {ReaderService} from "../../shared/services/reader.service";
import {ActorService} from "../../shared/services/actor.service";
import {BookService} from "../../shared/services/book.service";

@Component({
  selector: 'app-book-borrow',
  templateUrl: './book-borrow.component.html',
  styleUrls: ['./book-borrow.component.scss']
})
export class BookBorrowComponent implements OnInit {

    items = [];
    page = new Page();

    listReader1 : any ;
    listBook1 : any ;

    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'Name Reader', prop: 'banDoc.name', flexGrow: 3},
        {name: 'Name Book', prop: 'sach.name', flexGrow: 3},
        {name: 'Date Borrow', prop: 'date_borrow', flexGrow: 3},
        {name: 'Date Return', prop: 'date_return', flexGrow: 3},
        {name: 'Quantity', prop: 'soLuong', flexGrow: 3},
        {name: 'Status', prop: 'trang_thai', flexGrow: 3},
        {name: 'Actions', prop: 'actions', flexGrow: 3},

        ];

    formGroup = this.fb.group({
        id: [''],
        banDoc: [''],
        sach: [''],
        date_borrow: [''],
        date_return: [''],
        soLuong: [''],
        trang_thai: [''],
    });


  constructor(
      private fb: FormBuilder,
      private bookBorrowService: BookBorrowService,
      private readerService: ReaderService,
      private bookService: BookService,
      private toastrService: ToastrService
  ) { }



  ngOnInit(): void {
      this.prepareData();
  }

    prepareData() {
        this.getBookBorrow();
        this.getReader();
        this.getBook();
    }
    bookBorrow: any;
    getBookBorrow() {
        this.bookBorrowService.getBookBorrow().subscribe(
            (next: any) => {
                console.log('next', next);
                this.items = next;
                this.bookBorrow = next;
            });
    }

    getReader() {
        this.readerService.getReader().subscribe(
            (next: any) => {
                console.log('next', next);
                this.listReader1 = next;
            });
    }

    getBook() {
        this.bookService.getBooks().subscribe(
            (next: any) => {
                console.log('next', next);
                this.listBook1 = next;
            });
    }

    listReader = new Array();
    listStatus: any;
    getFindReader(row: any) {
        this.readerService.getDetailReader(row.id).subscribe((next: any) => {
            console.log('next', next);
            this.listReader1 = next;
            // this.listNXB=next;
            console.log(this.listReader1)
        });
        this.listReader.push(this.listReader1.filter((item: { id: any; }) => item.id === row.id));
        console.log(this.listReader)
    }

    edit(row : any) {
        console.log('row', row);
        console.log('row', row.banDoc);
        this.formGroup.patchValue(row);
    }

    delete(id: any) {
      console.log('id', id);
        this.bookBorrowService.deleteBookBorrow(id).subscribe(
            (next: any) => {
                console.log('next', next);
                this.prepareData();
            });
    }

    doSubmit() {

        this.formGroup.markAllAsTouched();
        console.log(this.formGroup.getRawValue());
        this.getFindReader(this.formGroup.getRawValue().banDoc);
        console.log(this.listReader[0]);
        this.formGroup.getRawValue().banDoc=this.listReader[0];
        console.log(this.formGroup.getRawValue().banDoc);
        if(this.formGroup.invalid){
            return;
        }
        if(this.formGroup.getRawValue().id){

            this.bookBorrowService.updateBookBorrow(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getBookBorrow();
                    console.log(this.getBook());
                    console.log(this.getReader());

                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }else {
            this.formGroup.getRawValue().banDoc === this.listReader1;
            console.log(this.formGroup.getRawValue().banDoc);
            this.bookBorrowService.addBookBorrow(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getBookBorrow();
                    console.log(this.listReader1);
                    console.log(this.formGroup.getRawValue().listNXB);
                    console.log(this.listReader1);

                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }
    }

}
