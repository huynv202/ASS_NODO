import { Component, OnInit } from '@angular/core';
import {Page} from "../../shared/model/page";
import {FormBuilder, Validators} from "@angular/forms";
import {ReaderService} from "../../shared/services/reader.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

    items = [];
    page = new Page();

    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'Name', prop: 'name', flexGrow: 3},
        {name: 'Code', prop: 'maBanDoc', flexGrow: 3},
        {name: 'Address', prop: 'address', flexGrow: 3},
        {name: 'Date of Account', prop: 'date_of_account', flexGrow: 3},
        {name: 'Date of Birth', prop: 'date_of_birth', flexGrow: 3},
        {name: 'Phone', prop: 'phone', flexGrow: 3},
        {name: 'Rank', prop: 'rank', flexGrow: 3},
        {name: 'Actions', prop: 'actions', flexGrow: 3},

    ];

    formGroup = this.fb.group({
        id: [''],
        name: ['',[Validators.required]],
        maBanDoc: [''],
        address: [''],
        date_of_account: [''],
        date_of_birth: [''],
        phone: [''],
        rank: ['',[Validators.minLength(1),Validators.max(5)]],
    });

  constructor(
      private fb :FormBuilder,
      private readerService: ReaderService,
      private toastrService: ToastrService
  ) { }


  ngOnInit(): void {
      this.prepareData();
  }

    prepareData() {
        this.getReader();
    }

    getReader() {
        this.readerService.getReader().subscribe(
            (next: any) => {
                console.log('next', next);
                this.items = next;
            });
    }

    edit(row : any){
        console.log('row', row);
        this.formGroup.patchValue(row);
    }

delete(row : any){
        console.log('row', row);
        this.readerService.deleteReader(row).subscribe(
            (next: any) => {
                console.log('next', next);
                this.toastrService.success('Delete success');
                this.getReader();
            },
            (error: any) => {
                console.log('error', error);
                this.toastrService.error('Delete error');
            }
        );
    }

    doSubmit() {
        this.formGroup.markAllAsTouched(); console.log(this.formGroup.getRawValue())

        if(this.formGroup.invalid){
            return;
        }
        if(this.formGroup.getRawValue().id){

            this.readerService.updateReader(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getReader();

                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }else {
            this.readerService.addReader(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getReader();
                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }
    }


}
