import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  collegeName: string;
  constructor() { }

  ngOnInit(): void {
    this.collegeName = "International Institute of Management Science - [IIMS] Chinchwad, Pune"
  }

}
