import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import Person from './person';

@Injectable({
  providedIn: 'root'
})
export class GettingElementsService {
  currentPerson: Person| undefined;
  constructor(private http: HttpClient) { }

  getList(): Observable<Person[]>{
    return this.http.get<Person[]>('https://www.breakingbadapi.com/api/characters?limit=8&offset=33');
  }


}
