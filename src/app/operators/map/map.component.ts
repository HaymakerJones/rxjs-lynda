import { Component, OnInit } from '@angular/core';
import { Observable, interval, pipe } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const numbers$ = interval(1000);


    numbers$.pipe(
      take(5),
      map(x => {
        return x * 10;
      }),
    ).subscribe(
      value => console.log(value)
    );
  }

}
