import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TakeComponent } from './take/take.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';

const routes: Routes = [
    { path: '', component: TakeComponent },
    { path: 'take', component: TakeComponent },
    { path: 'map', component: MapComponent },
    { path: 'filter', component: FilterComponent },
    { path: 'merge-map', component: MergeMapComponent },
    { path: 'switch-map', component: SwitchMapComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OperatorsRoutingModule { }

export const operatorRoutes = routes;