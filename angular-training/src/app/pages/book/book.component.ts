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

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

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
        this.publisherService.getDetailPublishingCompany(row.id).subscribe((next: any) => {
            console.log('next', next);
            this.listNXB1 = next;
            // this.listNXB=next;
            console.log(this.listNXB1)
        });
        this.listNXB.push(this.listNXB1.filter((item: { id: any; }) => item.id === row.id));
        console.log(this.listNXB)
    }



    getBook() {
        this.bookService.getBooks().subscribe((next: any) => {
            console.log('next', next);
            this.items = next;
            console.log(this.items)
        });
    }

    edit(row:any){
      console.log('row', row);
        this.formGroup.patchValue(row);
        console.log(this.formGroup.getRawValue());
        console.log(this.formGroup.getRawValue().nhaXuatBan);
        console.log(row.nhaXuatBan.name);
        this.formGroup.getRawValue().nhaXuatBan.setValue(row.nhaXuatBan.name);
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
        this.getFindNXBById(this.formGroup.getRawValue().nhaXuatBan);
        // console.log(this.getFindNXBById(this.formGroup.getRawValue().nhaXuatBan));
        console.log(this.listNXB[0]);

        // this.formGroup.getRawValue().nhaXuatBan.push(this.listNXB[0].filter((item: { id: any; }) => item.id === this.formGroup.getRawValue().nhaXuatBan));

      //set value for nhaXuatBan

       this.formGroup.getRawValue().nhaXuatBan=this.listNXB[0];
        console.log(this.formGroup.getRawValue().nhaXuatBan);


        if(this.formGroup.invalid){
            return;
        }
        if(this.formGroup.getRawValue().id){

            this.bookService.updateBook(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getBook();
                   console.log(this.getActor());
                   console.log(this.getNXB());

                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }else {
            this.formGroup.getRawValue().nhaXuatBan === this.listNXB1;
            console.log(this.formGroup.getRawValue().nhaXuatBan);
            // this.getDetailNXB(this.formGroup.getRawValue().listNXB);
            // console.log(this.getDetailNXB(this.formGroup.getRawValue().listNXB));
            this.bookService.addBook(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getBook();
                    console.log(this.listNXB1);
                    console.log(this.formGroup.getRawValue().listNXB);
                    console.log(this.listActor1);
                    // this.getDetailNXB(this.getNXB) ;
                    // this.getDetailNXB(this.getNXB);
                    // console.log(this.getDetailNXB);
                    // console.log(this.getDetailNXB(Number(this.getNXB)));
                    // console.log(this.listActor);
                    // this.getDetailNXB(this.getNXB);
                    // console.log(this.getDetailNXB(this.getNXB));
                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }
    }


}
