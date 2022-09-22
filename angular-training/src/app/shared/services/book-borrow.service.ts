import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookBorrowService {

    readonly MOCK_API_URL = 'http://localhost:8080/muonsach';

  constructor(private  http : HttpClient) { }

    getBookBorrow(): Observable<any> {
        return this.http.get<any>(`${this.MOCK_API_URL}/all`);
    }

    getDetailBookBorrow(id: number): Observable<any> {
        return this.http.get(`${this.MOCK_API_URL}/${id}`);
    }

    addBookBorrow(payload: any): Observable<any> {
        return this.http.post(`${this.MOCK_API_URL}/add`, payload);
    }

    updateBookBorrow(payload: any): Observable<any> {
        return this.http.put(`${this.MOCK_API_URL}/update`, payload);
    }

    deleteBookBorrow(id: number): Observable<any> {
        return this.http.delete(`${this.MOCK_API_URL}/delete/${id}`);
    }

}
