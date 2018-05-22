import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import { HomeRouting } from './home.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule, HomeRouting],
    declarations: [HomeComponent]
})
export class HomeModule {
}
