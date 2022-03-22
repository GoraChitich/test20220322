import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Person from '../person';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { GettingElementsService } from '../getting-elements.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  closeResult = '';

  @ViewChild ('content') content!: ElementRef;
  @Input() person!: Person;

  constructor(private modalService: NgbModal, private gettingElementsService: GettingElementsService) {
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.open();
    console.log('ngOnInit');


  }
  open() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.gettingElementsService.currentPerson=undefined;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      this.gettingElementsService.currentPerson=undefined;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
