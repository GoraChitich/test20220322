import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { GettingElementsService } from '../getting-elements.service';
import Person from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(@Inject(DOCUMENT) document: Document, public gettingElementsService: GettingElementsService) { }
  currentPerson: Person|undefined;
  ngOnInit(): void {
  }

  updateElements(){
    this.gettingElementsService.filteredPersons.forEach((val, index) => {
      if(index<10){
        let text = document.getElementById('idtext'+index);
        let box = document.getElementById('idbox'+index);
  
        text?.setAttribute("value", val.name);
        let postext = ''+(5-(40/(index+4)))+' '+(1.5+index*0.1)+' -3';
        let posbox = ''+(5-(40/(index+4)))+' '+(0.5+index*0.1)+' -3';
        let scale = ''+(0.2+(1/(index+1)))+' '+(0.2+(1/(index+1)))+' '+(0.2+(1/(index+1)));
        text?.setAttribute('position', postext);
        text?.setAttribute('scale',scale);
  
        box?.setAttribute("src", val.img);
        box?.setAttribute('position', posbox);
        box?.setAttribute('scale',scale);
      }
    })
  }

  ngAfterViewInit(): void {

      this.gettingElementsService.getList().subscribe(result =>{
      this.gettingElementsService.persons = result;
      this.gettingElementsService.filteredPersons = this.gettingElementsService.persons;
      this.gettingElementsService.mustUpdate = true;
    },
      err => {console.error(err)}
      );

      setInterval(() =>{
          if(this.gettingElementsService.mustUpdate) {
            this.updateElements();
            this.gettingElementsService.mustUpdate=false;
          }
      }, 100);

  }

  openDetails(item: Person){
    this.gettingElementsService.currentPerson = item;
  }
}
