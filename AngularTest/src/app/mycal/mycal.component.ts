import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycal',
  templateUrl: './mycal.component.html',
  styleUrls: ['./mycal.component.scss'],
})
export class MycalComponent implements OnInit {
  calList = [1];

  Addonclick() {
    this.calList.push(1);
  }
  MetaData = [
    ['1', '2', '3', '4'],
    ['5', '6', '7', '8'],
    ['9', '0', '+', '-'],
    ['*', '/', '.', '='],
  ];

  calcValue = '';

  HandleButtonClick(cell: string) {
    if (cell == '=') {
      this.calcValue = eval(this.calcValue);
    } else {
      this.calcValue += cell;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
