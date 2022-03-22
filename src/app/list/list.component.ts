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
  persons: Person[]=[];
  constructor(@Inject(DOCUMENT) document: Document, private gettingElementsService: GettingElementsService) { }
  interval: any;
  ngOnInit(): void {
  }
  
  updateElements(){
    console.log("persons: ", this.persons);
    this.persons.forEach((val, index) => {
      let text = document.getElementById('idtext'+index);
      console.log(text);
      text?.setAttribute("value", val.name);
      text?.setAttribute('position', ''+(-3.5+index*(1.5-index/10))+' '+(1.5-index/100)+' -3');
      let box = document.getElementById('idbox'+index);
      box?.setAttribute("src", val.img);
      box?.setAttribute('position', ''+(-3+index*(1.5-index/10))+' '+(0.5+index*0.1)+' -3');
  
      text?.setAttribute('scale',''+(1-index/10)+' '+(1-index/10)+' '+(1-index/10))
      box?.setAttribute('scale',''+(1-index/10)+' '+(1-index/10)+' '+(1-index/10))
      clearInterval(this.interval);
    })
  }
  
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // console.log("ngAfterViewInit");
    
    this.gettingElementsService.getList().subscribe(result =>{
      this.persons = result; 
      // this.updateElements();
    },
      err => {console.error(err)}
      );

      this.interval = setInterval(() =>{
        console.log("Check interval");
        if(this.persons.length){
          console.log("We have some persons");
          this.updateElements();
        }
      }, 1000);
  }
  


}
