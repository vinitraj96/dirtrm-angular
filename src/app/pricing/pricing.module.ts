import {NgModule} from '@angular/core';
import {PricingComponent} from './pricing.component';
import { PricingRouting } from './pricing.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule, PricingRouting],
    declarations: [PricingComponent]
})
export class PricingModule {
}
