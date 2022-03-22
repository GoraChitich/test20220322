import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import Person from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  persons: Person[]=[];
  constructor(@Inject(DOCUMENT) document: Document) { }

  ngOnInit(): void {
    this.persons.push({
        char_id: 33,
        name: "No-Doze",
        birthday: "Unknown",
        occupation: [
            "Juarez Cartel Lieutenant"
        ],
        img: "https://vignette.wikia.nocookie.net/breakingbad/images/c/ca/No_Doze_2.png/revision/latest?cb=20131014073210",
        status: "Deceased",
    });
    this.persons.push({
      char_id: 34,
      name: "Emilio Koyama",
      birthday: "Unknown",
      occupation: [
          "Low-level meth distributor"
      ],
      img: "https://vignette.wikia.nocookie.net/trbreakingbad/images/9/9c/Emilio.jpeg/revision/latest?cb=20161029192022",
      status: "Deceased",
    });
    this.persons.push({
      char_id: 38,
      name: "Ken",
      birthday: "Unknown",
      occupation: [
          "Stock Broker"
      ],
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/8/8c/Ken.png/revision/latest?cb=20170721163649",
      status: "Alive",
    });
    this.persons.push({
      char_id: 33,
      name: "No-Doze",
      birthday: "Unknown",
      occupation: [
          "Juarez Cartel Lieutenant"
      ],
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/c/ca/No_Doze_2.png/revision/latest?cb=20131014073210",
      status: "Deceased",
  });
  this.persons.push({
    char_id: 34,
    name: "Emilio Koyama",
    birthday: "Unknown",
    occupation: [
        "Low-level meth distributor"
    ],
    img: "https://vignette.wikia.nocookie.net/trbreakingbad/images/9/9c/Emilio.jpeg/revision/latest?cb=20161029192022",
    status: "Deceased",
  });
  this.persons.push({
    char_id: 38,
    name: "Ken",
    birthday: "Unknown",
    occupation: [
        "Stock Broker"
    ],
    img: "https://vignette.wikia.nocookie.net/breakingbad/images/8/8c/Ken.png/revision/latest?cb=20170721163649",
    status: "Alive",
  });
  }
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.persons.forEach((val, index) => {
    let text = document.getElementById('idtext'+index);
    text?.setAttribute("value", val.name);
    console.log(''+(-4+index)+' 2 -3')
    text?.setAttribute('position', ''+(-3.5+index*(1.5-index/10))+' '+(1.5-index/100)+' -3');
    let box = document.getElementById('idbox'+index);
    box?.setAttribute("src", val.img);
    box?.setAttribute('position', ''+(-3+index*(1.5-index/10))+' '+(0.5+index*0.1)+' -3');

    text?.setAttribute('scale',''+(1-index/10)+' '+(1-index/10)+' '+(1-index/10))
    box?.setAttribute('scale',''+(1-index/10)+' '+(1-index/10)+' '+(1-index/10))


  })
}
  

}
