import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'education',component:EducationComponent},
  {path:'skill',component:SkillComponent},
  {path:'project',component:ProjectComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }