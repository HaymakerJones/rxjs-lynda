import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { SharedModule } from './shared-module';
import { OperatorsModule } from './operators/operators.module';
import { TestInterfaceComponent } from './test-interface/test-interface.component';

import { FormsModule } from '@angular/forms';
import { TestApiComponent } from './test-api/test-api.component';



@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    SubjectComponent,
    BehaviourSubjectComponent,
    ReplaySubjectComponent,
    TestInterfaceComponent,
    TestApiComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    OperatorsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
