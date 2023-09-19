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

  /*postFrian() : Observable<addFriandise[]>{
     this.http.post<addFriandise[]>(`${this.baseUrl}/newFriandise`);
     return console.log('work')
  }*/

}
