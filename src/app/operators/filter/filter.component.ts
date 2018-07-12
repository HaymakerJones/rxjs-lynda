import { Component, OnInit } from '@angular/core';
import { Observable, interval, pipe } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const numbers$ = interval(1000);


    numbers$.pipe(
      take(5),
      map(x => {
        return x * 10;
      }),
      filter(
        x => x > 20
      ),
    ).subscribe(
      value => console.log(value)
    );
  }

}
