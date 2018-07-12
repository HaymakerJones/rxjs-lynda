import { Component, OnInit } from '@angular/core';
import { Observable, Subject, pipe, } from 'rxjs';
import { debounceTime, map, switchMap, distinctUntilChanged, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.scss']
})
export class TestApiComponent implements OnInit {

  title = "Test Reddit API";

  searchString: string;

  searchSubject$: Subject<string> = new Subject<string>();

  results$: Observable<any>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.results$ = this.searchSubject$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      tap(x => console.log(x)),
      switchMap(searchString => this.queryAPI(searchString))
    );
  }

  queryAPI(searchString) {
    console.log('queryAPI ', searchString);
    return this.http.get(`https://www.reddit.com/r/aww/search.json?q=${searchString}`).pipe(
      map(
        result => result['data']['children']
      )
    );
  }

  inputChanged($event) {
    this.searchSubject$.next($event);
  }

}
