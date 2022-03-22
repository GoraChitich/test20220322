import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GettingElementsService } from '../getting-elements.service';
import Person from '../person';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  
  @ViewChild ('txt') atext!: ElementRef;
  @ViewChild ('box') abox!: ElementRef;
  @Input() NElement: number=0;
  @Input() person!: Person;
  constructor() {
   }

  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
      console.log(this.person.name);
    
    this.atext.nativeElement.setAttribute("value", this.person.name);
    this.abox.nativeElement.setAttribute("src", this.person.img);
    
  }

  onClick(){
    console.log("click")
  }

}
