import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi ,withFetch} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddempComponent } from './addemp/addemp.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { InsertempComponent } from './insertemp/insertemp.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AddempComponent,
    ViewempComponent,
    UpdateempComponent,
    InsertempComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
     // Use provideHttpClient to configure HTTP client and interceptors
     provideHttpClient(withInterceptorsFromDi(),withFetch()), // Updated method
     provideClientHydration(withEventReplay()), provideAnimationsAsync()
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
