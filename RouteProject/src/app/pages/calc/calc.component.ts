import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ntg-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  value: any = '';
  MetaData = [['1', '2', '3', '4'], ['5', '6', '7', '8'], ['9', '0', '+', '-'], ['/', '*', '.', '=']];

  constructor() {
  }

  ngOnInit(): void {
  }

  HandleBuyttonClick(cell: string) {
    if (cell == '=') {
      this.value = eval(this.value);

    } else {
      this.value += cell;
    }

  }
}
