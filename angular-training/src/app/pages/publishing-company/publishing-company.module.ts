import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublishingCompanyComponent} from "./publishing-company.component";
import {PublishingCompanyRoutingModule} from "./publishing-company-routing.module";
import {PublishingCompanyService} from "../../shared/services/publishing-company.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SharedModule} from "../../shared/shared.module";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {FormModule} from "../../components/forms/forms.module";



@NgModule({
  declarations: [PublishingCompanyComponent],
    imports: [
        CommonModule,
        PublishingCompanyRoutingModule,
        MatExpansionModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        SharedModule,
        MatInputModule,
        FormModule,
        MatRadioModule,
        NgxDatatableModule
    ],
    providers :[PublishingCompanyService]
})
export class PublishingCompanyModule { }
