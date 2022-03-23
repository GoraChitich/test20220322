import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import Person from './person';

@Injectable({
  providedIn: 'root'
})
export class GettingElementsService {
  currentPerson: Person| undefined;
  persons: Person[]=[];
  filteredPersons: Person[]=[];
  mustUpdate: boolean = false;
  constructor(private http: HttpClient) { }

  getList(): Observable<Person[]>{
    return this.http.get<Person[]>('https://www.breakingbadapi.com/api/characters');
  }

  setFilter(filter: string){
    this.filteredPersons = this.persons.filter((person)=>person.name.toLowerCase().indexOf(filter.toLowerCase())>=0 || !filter.trim() ? true: false);
    this.mustUpdate = true;
    console.log("filteredPersons: "+this.filteredPersons.length);
  }


}
