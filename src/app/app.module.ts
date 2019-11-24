import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/pages/home/home.component';
import { NavbarComponent } from './components/sections/navbar/navbar.component';
import { HeaderComponent } from './components/sections/header/header.component';
import { WelcomeComponent } from './components/sections/welcome/welcome.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { FooterComponent } from './components/sections/footer/footer.component';
import { WhyUsComponent } from './components/sections/why-us/why-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    WelcomeComponent,
    ServicesComponent,
    FooterComponent,
    WhyUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
  ],
  providers: [

    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
