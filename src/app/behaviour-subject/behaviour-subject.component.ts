import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behaviour-subject',
  templateUrl: './behaviour-subject.component.html',
  styleUrls: ['./behaviour-subject.component.scss']
})
export class BehaviourSubjectComponent implements OnInit {

  title = "Behaviour Subject";
  subject$: BehaviorSubject<any>;

  constructor() { }

  ngOnInit() {
    this.subject$ = new BehaviorSubject<any>(200);
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
