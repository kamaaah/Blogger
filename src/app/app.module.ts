import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
