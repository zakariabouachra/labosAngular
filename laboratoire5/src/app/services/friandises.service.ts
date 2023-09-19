import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Friandise } from '../models/friandise.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriandisesService {
  baseUrl='http://localhost:3340/frian';

  constructor(private http:HttpClient) { }

  getAll() : Observable<Friandise[]>{
    return this.http.get<Friandise[]>(`${this.baseUrl}/friandises`);
  }

  postFrian(data :any) : Observable<any>{
    return this.http.post(`${this.baseUrl}/newFriandise`,data);
      //console.log('work')
  }

}
