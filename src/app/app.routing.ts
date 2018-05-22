import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];
@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting {
}
