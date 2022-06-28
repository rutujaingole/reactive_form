import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  locations: string[] = ['Location', 'Downtown', 'S. County', 'Lakeside'];

  constructor(){ }

  ngOnInit() {

  }
}
