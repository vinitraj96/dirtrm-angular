import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OurServicesComponent } from './our-services.component';

const routes: Routes = [
    {
        path: 'our_services',
        component: OurServicesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OurServicesRouting {
}
