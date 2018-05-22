import {NgModule} from '@angular/core';
import {OurServicesComponent} from './our-services.component';
import { OurServicesRouting } from './our-services.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule, OurServicesRouting],
    declarations: [OurServicesComponent]
})
export class OurServicesModule {
}
