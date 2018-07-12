import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() navTitle: string;
  navItems: any;

  constructor() { }

  ngOnInit() {
    this.navItems = [
      {
        path: '/observable',
        label: 'Observable'
      },
      {
        path: '/subject',
        label: 'Subject'
      },
      {
        path: '/behaviour-subject',
        label: 'Behaviour Subject'
      },
      {
        path: '/replay-subject',
        label: 'Replay Subject'
      },
      {
        path: '/operators',
        label: 'Operators'
      },
      {
        path: '/test-interface',
        label: 'Test Interface Interaction'
      },
      {
        path: '/test-api',
        label: 'Test Reddit API'
      }
    ];
  }

}
