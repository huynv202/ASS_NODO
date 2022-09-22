import { Component, OnInit } from '@angular/core';
import {Page} from "../../shared/model/page";
import {FormBuilder} from "@angular/forms";
import {PublishingCompanyService} from "../../shared/services/publishing-company.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-publishing-company',
  templateUrl: './publishing-company.component.html',
  styleUrls: ['./publishing-company.component.scss']
})
export class PublishingCompanyComponent implements OnInit {

    items   = [];
    page = new Page();

    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'Name', prop: 'name', flexGrow: 3},
        {name: 'Code NXB', prop: 'maNXB', flexGrow: 3},
        {name: 'Address', prop: 'address', flexGrow: 3},
        {name: 'Describe', prop: 'mo_ta', flexGrow: 3},
        {name: 'Status', prop: 'trang_thai', flexGrow: 3},
        {name: 'Actions', prop: 'actions', flexGrow: 2},
        ];

    formGroup = this.fb.group({
        id: [''],
        name: [''],
        maNXB: [''],
        address: [''],
        mo_ta: [''],
        trang_thai: [''],
    });

  constructor(
      private  fb: FormBuilder,
      private publishingCompanyService: PublishingCompanyService,
      private toastrService: ToastrService
      ,
  ) { }

  ngOnInit(): void {
      this.prepareData();
  }

  prepareData() {
        this.getPublishingCompany();
  }

  getPublishingCompany() {
        this.publishingCompanyService.getPublishingCompany().subscribe(
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
        this.publishingCompanyService.deletePublishingCompany(row).subscribe(
            (next: any) => {
                console.log('next', next);
                this.toastrService.success('Delete success');
                this.formGroup.reset();
                this.getPublishingCompany();
                // this.prepareData();
            },
            (error: any) => {
                console.log('error', error);
                this.toastrService.error('Delete failed');
            }
        );
    }

    doSubmit() {
        this.formGroup.markAllAsTouched(); console.log(this.formGroup.getRawValue())

        if(this.formGroup.invalid){
            return;
        }
        if(this.formGroup.getRawValue().id){

            this.publishingCompanyService.updatePublishingCompany(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getPublishingCompany();

                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }else {
            this.publishingCompanyService.addPublishingCompany(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getPublishingCompany();
                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }
    }

}
