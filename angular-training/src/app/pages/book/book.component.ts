import {Component, Input, OnInit} from '@angular/core';
import {Page} from "../../shared/model/page";
import {FormBuilder, Validators} from "@angular/forms";
import {BookService} from "../../shared/services/book.service";
import {ToastrService} from "ngx-toastr";
import {MatAccordionTogglePosition} from "@angular/material/expansion";
import {MatSelectChange} from "@angular/material/select";
import {ActorService} from "../../shared/services/actor.service";
import {FormModule} from "../../components/forms/forms.module";
import {PublishingCompanyService} from "../../shared/services/publishing-company.service";
import {number} from "echarts";
import {Book} from "./book";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {


   public item: Book[] | undefined;

    items   = [];
    page = new Page();
    listNXB1 : any;
    listActor1  :any;


    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'Name', prop: 'name', flexGrow: 3},
        {name: 'Book Code', prop: 'maSach', flexGrow: 1.5},
        {name: 'Name NXB', prop: 'nhaXuatBan.name', flexGrow: 6},
        {name: 'Name Actor', prop: 'tacGia.name' , flexGrow: 4},
        {name: 'Content', prop: 'content', flexGrow: 3},
        {name: 'Publishing year', prop: 'namxuatban', flexGrow: 3},
        {name: 'Describe', prop: 'mota', flexGrow: 3},
        {name: 'Số lượng còn lại', prop: 'soLuongConLai', flexGrow: 2},
        {name: 'Số lượng đang mượn', prop: 'soLuongDangMuon', flexGrow: 2},
        {name: 'Tổng sách', prop: 'toTal', flexGrow: 2},
        {name: 'Actions', prop: 'actions', flexGrow: 4},
    ];

    formGroup = this.fb.group({
        id: [''],
        name: ['', Validators.required],
        maSach: ['', [Validators.max(35)]],
        nhaXuatBan: ['', Validators.required],
        tacGia: ['', Validators.required],
        content: ['', [Validators.max(35)]],
        namxuatban: ['', Validators.maxLength(100)],
        mota: [''],
        soLuongConLai: [''],
        soLuongDangMuon: [''],
        toTal: [''],

    });
    //
    public searchBookName(key: string): void {
        console.log(key);
        const results: Book[] = [];
        // @ts-ignore
        for (const item of this.item) {
            if (
                item.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
            ) {
                results.push(item);
            }
        }
        // @ts-ignore
        this.items = results;
        if (results.length === 0 || !key) {
            this.items;
        }
    }
@Input() a= true;
    // @ts-ignore
    openForm() {
      if (this.a){
          this.formGroup.reset();
        this.a = false;
      }else {
      return this.a = true;
      }
    }

    openForm1(){
        this.a= false;
    }


  constructor(
      private fb: FormBuilder,
      private bookService: BookService,
      private publisherService: PublishingCompanyService,
      private actorService: ActorService,
      private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
      this.prepareData()
  }

    prepareData() {
        this.getBook();
        this.getNXB();
        this.getActor();
    }

    getActor() {
        this.bookService.getActors().subscribe((next: any) => {
            console.log('next', next);
            this.listActor1 = next;
            console.log(this.listActor1)

        });
    }

    getNXB() {
        this.publisherService.getPublishingCompany().subscribe(
            (next: any) => {
                console.log('next', next);
                this.listNXB1 = next;
                console.log(this.listNXB1)
            });

    }
      listNXB = new Array();
    getFindNXBById(row: any) {
        this.publisherService.getDetailPublishingCompany(row).subscribe((next: any) => {
            console.log('next', next);
            this.listNXB1 = next;
            // this.listNXB=next;
            console.log(this.listNXB1)
        });
        this.listNXB.push(this.listNXB1.filter((item: { id: any; }) => item.id === row));
        console.log(this.listNXB)
    }



    getBook() {
        this.bookService.getBooks().subscribe((next: any) => {
            console.log('next', next);
            this.items = next;
            this.item = next;
            console.log(this.items)
        });
    }

    edit(row:any){
      console.log('row', row);
      this.openForm1();
        this.formGroup.patchValue({
            id: row.id,
            name: row.name,
            maSach: row.maSach,
            nhaXuatBan: row.nhaXuatBan,
            tacGia: row.tacGia,
            content: row.content,
            namxuatban: row.namxuatban,
            mota: row.mota,
            soLuongConLai: row.soLuongConLai,
            soLuongDangMuon: row.soLuongDangMuon,
            toTal: row.toTal,
        });

    }



    delete(row:any){
      console.log('row', row);
        this.bookService.deleteBook(row).subscribe({
            next: () => {
                this.toastrService.success(`Successful`);
                this.formGroup.reset();
                this.getBook();
            }, error: (error) => {
                this.toastrService.error(`Failed !!!`);
                console.error(error);
            }
        })
    }


    doSubmit() {

        this.formGroup.markAllAsTouched();
        console.log(this.formGroup.getRawValue());
        this.getFindNXBById(this.formGroup.getRawValue().banDoc);
        console.log(this.listNXB[0]);
        this.formGroup.getRawValue().banDoc=this.listNXB[0];
        console.log(this.formGroup.getRawValue().banDoc);
        if(this.formGroup.invalid){
            return;
        }
        if(this.formGroup.getRawValue().id){

            this.bookService.updateBook(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getBook()
                    console.log(this.getNXB());
                    console.log(this.getActor());

                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }else {
            this.formGroup.getRawValue().banDoc === this.listNXB1;
            console.log(this.formGroup.getRawValue().banDoc);
            this.bookService.addBook(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getBook();
                    console.log(this.listNXB1);
                    console.log(this.formGroup.getRawValue().listNXB);
                    console.log(this.listNXB1);

                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }
    }

}
