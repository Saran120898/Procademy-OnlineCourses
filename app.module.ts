import { Route } from "@angular/router";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { Button, ButtonModule } from 'primeng/button';
import { CourseService } from './Services/course.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { RoutingModule } from "./routing.module";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    CoursesComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    CheckoutComponent,
    CourseDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    ButtonModule,

  ],

  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
