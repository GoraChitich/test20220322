import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { GettingElementsService } from '../getting-elements.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterString:string = "";
  constructor(private gettingElementsService: GettingElementsService) { }

  ngOnInit(): void {
  }

  onInput(){
    this.gettingElementsService.setFilter(this.filterString); 
  }

}
