import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CabecalhoComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SobremimComponent } from './sobremim/sobremim.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CabecalhoComponent,
    FooterComponent,
    SobremimComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
