import { Component, OnInit } from '@angular/core';
import {Page} from "../../shared/model/page";
import {FormBuilder} from "@angular/forms";
import {ActorService} from "../../shared/services/actor.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.scss']
})
export class ActorComponent implements OnInit {

    items = [];
    page = new Page();

    columns = [
        {name: 'STT', prop: 'index', flexGrow: 1.5},
        {name: 'Name', prop: 'name', flexGrow: 3},
        {name: 'Code', prop: 'maTacGia', flexGrow: 3},
        {name: 'Address', prop: 'address', flexGrow: 3},
        {name: 'Phone', prop: 'phone', flexGrow: 3},
        {name: 'Describe', prop: 'mota', flexGrow: 2},
        {name: 'Actions', prop: 'actions', flexGrow: 2},

    ];

    formGroup = this.fb.group({
        id: [''],
        name: [''],
        maTacGia: [''],
        address: [''],
        phone: [''],
        mota: [''],
    });


  constructor(
      private fb :FormBuilder,
      private actorService: ActorService,
      private toastrService: ToastrService
  ) { }


  ngOnInit(): void {
      this.prepareData();
  }

    prepareData() {
        this.getActor();
    }

    getActor() {
        this.actorService.getActor().subscribe(
            (next: any) => {
                console.log('next', next);
                this.items = next;
            },
            (error: any) => {
                console.log('error', error);
            },
            () => {
                console.log('complete');
            }
        );
    }

    edit(row : any){
        console.log('row', row);
        this.formGroup.patchValue(row);
    }

    delete(row : any){
        console.log('row', row);
        this.actorService.deleteActor(row).subscribe(
            (next: any) => {
                console.log('next', next);
                this.toastrService.success('Delete success');
                this.getActor();
            },
            (error: any) => {
                console.log('error', error);
                this.toastrService.error('Delete fail');
            },
            () => {
                console.log('complete');
            }
        );
    }

    doSubmit() {
        this.formGroup.markAllAsTouched(); console.log(this.formGroup.getRawValue())

        if(this.formGroup.invalid){
            return;
        }
        if(this.formGroup.getRawValue().id){

            this.actorService.updateActor(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getActor();

                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }else {
            this.actorService.addActor(this.formGroup.getRawValue()).subscribe({
                next: () => {
                    this.toastrService.success(`Successful`);
                    this.formGroup.reset();
                    this.getActor();
                }, error: (error) => {
                    this.toastrService.error(`Failed !!!`);
                    console.error(error);
                }
            })
        }
    }

}
