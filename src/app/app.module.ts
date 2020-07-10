import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { PilaresComponent } from './components/pilares/pilares.component';



@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    PilaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // material
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
