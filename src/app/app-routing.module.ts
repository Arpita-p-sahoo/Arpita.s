import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'experience',component:ExperienceComponent},
  {path:'about',component:AboutMeComponent},
  {path:'hireme',component:HireMeComponent},
  {path:'workspace',component:WorkspaceComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
