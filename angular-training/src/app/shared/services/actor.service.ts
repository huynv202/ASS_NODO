import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActorService {


    readonly MOCK_API_URL = 'http://localhost:8080/actor';

  constructor(private http :HttpClient) { }

    getActor(): Observable<any> {
        return this.http.get<any>(`${this.MOCK_API_URL}/all`);
    }

    getDetailActor(id: number): Observable<any> {
        return this.http.get(`${this.MOCK_API_URL}/find/${id}`);
    }

    addActor(payload: any): Observable<any> {
        return this.http.post(`${this.MOCK_API_URL}/add`, payload);
    }

    updateActor(payload: any): Observable<any> {
        return this.http.put(`${this.MOCK_API_URL}/update`, payload);
    }

    deleteActor(id: number): Observable<any> {
        return this.http.delete(`${this.MOCK_API_URL}/delete/${id}`);
    }
}
