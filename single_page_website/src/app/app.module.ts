import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AwsCourseComponent } from './aws-course/aws-course.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CourseComponent } from './course/course.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MeanStackComponent } from './mean-stack/mean-stack.component';
import { MernStackComponent } from './mern-stack/mern-stack.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlacementComponent } from './placement/placement.component';
import { RegisterComponent } from './register/register.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    AwsCourseComponent,
    ContactUsComponent,
    CourseComponent,
    CyberSecurityComponent,
    FooterComponent,
    HomeComponent,
    MeanStackComponent,
    MernStackComponent,
    NavbarComponent,
    PlacementComponent,
    RegisterComponent,
    WildCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
