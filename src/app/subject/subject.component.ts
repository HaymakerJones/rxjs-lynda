import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  title = "Subject";
  subject$: Subject<any>;

  constructor() { }

  ngOnInit() {
    this.subject$ = new Subject<any>();
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
