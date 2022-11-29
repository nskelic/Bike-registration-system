import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BikeService } from './service/bike.service';
import { AdminComponent } from './components/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewRegistrationComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [BikeService,
              AuthService,
              AuthGuard
            ],


  bootstrap: [AppComponent]
})
export class AppModule { }
