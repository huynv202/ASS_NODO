import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReaderService {

    readonly MOCK_API_URL = 'http://localhost:8080/reader';

  constructor(private http: HttpClient) { }

    getReader(): Observable<any> {
        return this.http.get<any>(`${this.MOCK_API_URL}/all`);
    }

    getDetailReader(id: number): Observable<any> {
        return this.http.get(`${this.MOCK_API_URL}/find/${id}`);
    }

    addReader(payload: any): Observable<any> {
        return this.http.post(`${this.MOCK_API_URL}/add`, payload);
    }

    updateReader(payload: any): Observable<any> {
        return this.http.put(`${this.MOCK_API_URL}/update`, payload);
    }

    deleteReader(id: number): Observable<any> {
        return this.http.delete(`${this.MOCK_API_URL}/delete/${id}`);
    }

}
