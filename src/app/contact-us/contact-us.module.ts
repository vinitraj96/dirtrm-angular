import {NgModule} from '@angular/core';
import {ContactUsComponent} from './contact-us.component';
import { ContactUsRouting } from './contact-us.routing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    imports: [BrowserModule, FormsModule, ContactUsRouting],
    declarations: [ContactUsComponent]
})
export class ContactUsModule {
}
