import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, Subject, pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-test-interface',
  templateUrl: './test-interface.component.html',
  styleUrls: ['./test-interface.component.scss']
})
export class TestInterfaceComponent implements OnInit {

  title = "Test Interface Interactions";

  searchString: string;

  searchSubject: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    fromEvent(document, 'click').subscribe(
      value => console.log(value)
    );

    this.searchSubject.pipe(
      debounceTime(200),
    ).subscribe(
      value => console.log('debounced ', value)
    );
  }

  inputChanged($event) {
    console.log('input changed ', $event);
    this.searchSubject.next($event);
  }

}
