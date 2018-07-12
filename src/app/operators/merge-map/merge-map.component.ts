//Merge map operator is used for dealing with multiple observable streams

import { Component, OnInit } from '@angular/core';
import { of, interval, Observable, pipe } from 'rxjs';
import { mergeMap, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const numbers$ = interval(1000);
    const letters$ = of('a', 'b', 'c', 'd', 'e', 'f');

    letters$.pipe(
      mergeMap(x => numbers$.pipe(
        take(5),
        map(i => i + x)
      ))
    ).subscribe(
      value => console.log(value)
    );
  }

}
