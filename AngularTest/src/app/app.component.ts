import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  selectThisPage: number = 1;
  title = 'AngularTest';
  selectThepage(ev: number) {
    this.selectThisPage = ev;
  }
}
