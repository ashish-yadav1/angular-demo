import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  @Input() message: any;
  constructor() {
  }

  ngOnInit() {

  }
}
