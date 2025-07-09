import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { CoursesComponent } from "./courses/courses.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { CourseDetailsComponent } from "./courses/course-details/course-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Courses', component: CoursesComponent },
  { path: 'Courses/Checkout', component: CheckoutComponent },
  { path: 'Checkout', component: CheckoutComponent },
  { path: 'Courses/Course/:id', component: CourseDetailsComponent },
  { path: 'Courses/Course/:id/Checkout', component: CheckoutComponent },
  { path: '**', component: NotfoundComponent },
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})
export class RoutingModule {

}
