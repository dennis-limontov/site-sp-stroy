import { Component, OnInit } from '@angular/core';
import maps from "./maps";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    maps();
  }

}
