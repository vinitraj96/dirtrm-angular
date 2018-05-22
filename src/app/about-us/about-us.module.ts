import {NgModule} from '@angular/core';
import {AboutUsComponent} from './about-us.component';
import { AboutUsRouting } from './about-us.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule, AboutUsRouting],
    declarations: [AboutUsComponent]
})
export class AboutUsModule {
}
