import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app.routing';
import { AboutUsComponent } from './about-us/about-us.component';
// import { ContactUsComponent } from './contact-us/contact-us.component';
// import { FAQComponent } from './faq/faq.component';
// import { PricingComponent } from './pricing/pricing.component';
// import { OurServicesComponent } from './our-services/our-services.component';
import {AboutUsModule} from './about-us/about-us.module';
import {ContactUsModule} from './contact-us/contact-us.module';
import {FAQModule} from './faq/faq.module';
 import {PricingModule} from './pricing/pricing.module';
import {OurServicesModule} from './our-services/our-services.module';
// import { PricingComponent } from './pricing/pricing.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    HomeModule,
    AboutUsModule,
    ContactUsModule,
    FAQModule,
    PricingModule,
    OurServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
