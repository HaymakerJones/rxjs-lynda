import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit, OnDestroy {

  title = "Replay Subject";
  subject$: ReplaySubject<any>;

  constructor() { }

  ngOnInit() {
    this.subject$ = new ReplaySubject<any>();
    this.subject$.subscribe(value => console.log("First Subscribe ", value));
    this.subject$.next(1);
    this.subject$.next(2);
    this.subject$.next(3);
    //this.subject$.unsubscribe();    //Use this instead of complete() so that it throws and error

    this.subject$.subscribe(value => console.log("Second Subscribe ", value));  //Notice this only gets values after the subscription
    this.subject$.next(4);
  }


  ngOnDestroy() {
    this.subject$.unsubscribe();
  }

}
