import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AboutComponent } from '../profile/about/about.component';
import { ServicesComponent } from '../profile/services/services.component';
import { SkillsComponent } from '../profile/skills/skills.component';
import { EducationComponent } from '../profile/education/education.component';
import { ExperienceComponent } from '../profile/experience/experience.component';
import { WorkComponent } from '../profile/work/work.component';
import { BlogComponent } from '../profile/blog/blog.component';
import { ContactComponent } from '../profile/contact/contact.component';
import { HomeComponent } from '../profile/home/home.component';
const routes = [
  { path: '', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
    ProfileComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    WorkComponent,
    BlogComponent,
    ContactComponent,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
