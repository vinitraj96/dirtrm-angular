import {NgModule} from '@angular/core';
import {FAQComponent} from './faq.component';
import { FAQRouting } from './faq.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule, FAQRouting],
    declarations: [FAQComponent]
})
export class FAQModule {
}
