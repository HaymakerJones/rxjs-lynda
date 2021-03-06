import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperatorsRoutingModule } from './operators-routing';
import { OperatorsComponent } from './operators.component';
import { TakeComponent } from './take/take.component';
import { SharedModule } from '../shared-module';
import { OperatorsNavComponent } from './operators-nav/operators-nav.component';
import { MapComponent } from './map/map.component';
import { FilterComponent } from './filter/filter.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';



@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        OperatorsRoutingModule
    ],
    exports: [
        OperatorsComponent,
        TakeComponent,
        OperatorsNavComponent,
        MapComponent,
    ],
    declarations: [
        OperatorsComponent,
        TakeComponent,
        OperatorsNavComponent,
        MapComponent,
        FilterComponent,
        MergeMapComponent,
        SwitchMapComponent,
    ],
    providers: [],
})
export class OperatorsModule { }
