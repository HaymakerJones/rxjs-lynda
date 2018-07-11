import { Component, OnInit } from '@angular/core';
import { Observable, pipe, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const numbers$ = interval(1000).pipe(
      take(5),
    ).subscribe(
      value => console.log(value)
    );
  }

}
