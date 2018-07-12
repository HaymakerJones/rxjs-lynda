//switchMap will only give the most recent result

import { Component, OnInit } from '@angular/core';
import { of, interval, Observable, pipe } from 'rxjs';
import { switchMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const numbers$ = interval(1000);
    const letters$ = of('a', 'b', 'c', 'd', 'e', 'f');

    letters$.pipe(
      switchMap(x => numbers$.pipe(
        take(5),
        map(i => i + x)
      ))
    ).subscribe(
      value => console.log(value)
    );
  }

}
