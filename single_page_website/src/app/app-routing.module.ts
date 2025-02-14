import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { PlacementComponent } from './placement/placement.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MeanStackComponent } from './mean-stack/mean-stack.component';
import { MernStackComponent } from './mern-stack/mern-stack.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { AwsCourseComponent } from './aws-course/aws-course.component';
import { WildCardComponent } from './wild-card/wild-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'course', component: CourseComponent },
  { path: 'placement', component: PlacementComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'MeanStackCourse', component: MeanStackComponent },
  { path: 'MernStackCourse', component: MernStackComponent },
  { path: 'CyberSecurityCourse', component: CyberSecurityComponent },
  { path: 'AwsCourse', component: AwsCourseComponent },
  { path: '**', component: WildCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
