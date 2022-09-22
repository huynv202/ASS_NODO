import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PublishingCompanyService {

    readonly MOCK_API_URL = 'http://localhost:8080/nxb';


  constructor(private  http :HttpClient) { }

    getPublishingCompany(): Observable<any> {
        return this.http.get<any>(`${this.MOCK_API_URL}/all`);
    }

    getDetailPublishingCompany(id: number): Observable<any> {
        return this.http.get(`${this.MOCK_API_URL}/find/${id}`);
    }

    addPublishingCompany(payload: any): Observable<any> {
        return this.http.post(`${this.MOCK_API_URL}/add`, payload);
    }

    updatePublishingCompany(payload: any): Observable<any> {
        return this.http.put(`${this.MOCK_API_URL}/update`, payload);
    }

    deletePublishingCompany(id: number): Observable<any> {
        return this.http.delete(`${this.MOCK_API_URL}/delete/${id}`);
    }
}
