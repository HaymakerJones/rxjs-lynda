import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservableComponent } from './observable/observable.component';
import { SubjectComponent } from './subject/subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { OperatorsComponent } from './operators/operators.component';
import { operatorRoutes } from './operators/operators-routing';

const routes: Routes = [
  { path: '', redirectTo: '/observable', pathMatch: 'full' },
  { path: 'observable', component: ObservableComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'behaviour-subject', component: BehaviourSubjectComponent },
  { path: 'replay-subject', component: ReplaySubjectComponent },
  { path: 'operators', component: OperatorsComponent, children: operatorRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
