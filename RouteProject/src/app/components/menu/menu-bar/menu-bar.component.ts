import {Component, Input, OnInit} from '@angular/core';
import {MenuInfo} from "../MenuInfo";

@Component({
  selector: 'ntg-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Input('data')
  set setdata(data: Array<MenuInfo>) {
    this.data = data;
    this.ActiveMenudata = data;
  }

  data: Array<MenuInfo> | undefined;


  ActiveMenudata: Array<MenuInfo> | undefined;

  PreviouseMenus: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  HandleMenuClick(item: MenuInfo, $event: MouseEvent) {

    if (item.childs && item.childs.length > 0) {

      $event.preventDefault();
      this.PreviouseMenus.push(this.ActiveMenudata);
      this.ActiveMenudata = item.childs;

    }

  }

  HandleBack(e: MouseEvent) {
    e.preventDefault();

    this.ActiveMenudata = this.PreviouseMenus.pop();
  }
}
