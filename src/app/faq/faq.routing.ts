import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FAQComponent } from './faq.component';

const routes: Routes = [
    {
        path: 'faq',
        component: FAQComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FAQRouting {
}
