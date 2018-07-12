import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operators-nav',
  templateUrl: './operators-nav.component.html',
  styleUrls: ['./operators-nav.component.scss']
})
export class OperatorsNavComponent implements OnInit {

  navItems: any;

  constructor() { }

  ngOnInit() {
    this.navItems = [
      { path: './take', label: 'Take' },
      { path: './map', label: 'Map' },
      { path: './filter', label: 'Filter' },
      { path: './merge-map', label: 'Merge Map' },
      { path: './switch-map', label: 'Switch Map' },
    ];

  }

}
