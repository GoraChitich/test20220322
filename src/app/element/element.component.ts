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
  person: Person|undefined;

  @ViewChild ('content') content!: ElementRef;

  constructor(private modalService: NgbModal, private gettingElementsService: GettingElementsService) {
    this.person  = this.gettingElementsService.currentPerson;
   }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.open();
  }
  open() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
       this.gettingElementsService.currentPerson=undefined;
    }, (reason) => {
      this.gettingElementsService.currentPerson=undefined;
    });
  }
}
