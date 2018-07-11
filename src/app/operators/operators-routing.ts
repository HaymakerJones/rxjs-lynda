import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeComponent } from './take/take.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
    { path: '', component: TakeComponent },
    { path: 'take', component: TakeComponent },
    { path: 'map', component: MapComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OperatorsRoutingModule { }

export const operatorRoutes = routes;