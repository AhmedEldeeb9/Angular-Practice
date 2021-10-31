import { Component, OnInit } from '@angular/core';
import {MenuInfo} from "../menu/MenuInfo";

@Component({
  selector: 'ntg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  MenuData: Array<MenuInfo> = [
    {Caption : 'Home' , href : 'home',icon: 'fa fa-home'},
    {Caption : 'Tool' , icon : 'fa fa-book' , childs : [

        {Caption : 'Calc' , href: 'calc' , icon : 'fa fa-calculator'},
        {Caption : 'About' , href : 'about' ,icon : 'fa fa-amazon'}

      ]},
    {Caption : 'About' , href : 'about' ,icon : 'fa fa-amazon'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
