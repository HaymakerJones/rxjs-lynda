import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

  title = "Observable"
  observable$: Observable<any>;
  subscriber: Subscription;

  constructor() { }

  ngOnInit() {
    this.observable$ = Observable.create(observer => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    this.subscriber = this.observable$.subscribe(
      value => {
        console.log(value);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log("No more data");
      }
    );
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

}
