import { BrowserModule } from '@angular/platform-browser';
import { Input, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routingComponents } from './app-routing.module';
import { CriteriaService } from './services/criteria.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { ValidationService } from './services/validation.service';

// import { CriteriaComponent } from './criteria/criteria.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ErrorMessagesComponent,
    // CriteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [CriteriaService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
