import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SharedModule } from './shared-module';
import { OperatorsModule } from './operators/operators.module';


@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    ReplaySubjectComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    OperatorsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
