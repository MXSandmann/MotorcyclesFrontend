import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotorcycleComponent } from './motorcycle/motorcycle.component';
import { EditMotorcycleComponent } from './edit-motorcycle/edit-motorcycle.component';
import { FormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe/subscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    MotorcycleComponent,
    EditMotorcycleComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
