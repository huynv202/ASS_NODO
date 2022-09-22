import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

    readonly MOCK_API_URL = 'http://localhost:8080/book';

    readonly  MOCK_API_URL_NXB = 'http://localhost:8080/nxb';

    readonly MOCK_API_URL_ACTOR = 'http://localhost:8080/actor';

  constructor(private http: HttpClient) { }

    getActors(): Observable<any> {
        return this.http.get(`${this.MOCK_API_URL_ACTOR}/all`);
    }


    getBooks(): Observable<any> {
      return this.http.get<any>(`${this.MOCK_API_URL}/all`);
    }

    getDetailBook(id: number): Observable<any> {
      return this.http.get(`${this.MOCK_API_URL}/${id}`);
    }

    addBook(payload: any): Observable<any> {
        return this.http.post(`${this.MOCK_API_URL}/add`, payload);
    }

    updateBook(payload: any): Observable<any> {
        return this.http.put(`${this.MOCK_API_URL}/update`, payload);
    }

    deleteBook(id: number): Observable<any> {
        return this.http.delete(`${this.MOCK_API_URL}/delete/${id}`);
    }
}
