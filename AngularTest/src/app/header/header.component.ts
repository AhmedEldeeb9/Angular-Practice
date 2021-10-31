import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isactive: number = 0;
  @Output() myOutput: EventEmitter<any> = new EventEmitter();
  moveToHome(event: number) {
    this.myOutput.emit(event);
    this.isactive = event;
  }

  constructor() {}

  ngOnInit(): void {}
}
