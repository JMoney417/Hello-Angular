import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BioComponent } from './bio/bio.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DeveloperService } from './developer.service';
import { BioDetailsComponent } from './bio-details/bio-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BioCreateComponent } from './bio-create/bio-create.component';

@NgModule({
  declarations: [
    AppComponent,
    BioComponent,
    HomeComponent,
    BioDetailsComponent,
    BioCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DeveloperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
