import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './Service/component1/comp1/comp1.component';
import { Comp2Component } from './Service/component1/component2/comp2/comp2.component';
import { FormsModule } from '@angular/forms';
import { DatasharingService } from './Service/datasharing.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatasharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
