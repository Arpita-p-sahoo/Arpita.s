import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ZebaqExpComponent } from './material/Dilogs/zebaq-exp/zebaq-exp.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HireMeComponent } from './hire-me/hire-me.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { BlogsComponent } from './content/blogs/blogs.component';
import { TalksComponent } from './content/talks/talks.component';
import { TelephonyChatComponent } from './content/projects/project-content/telephony-chat/telephony-chat.component';
import { HttpClientModule } from '@angular/common/http';
import { DatetimeFormatterComponent } from './content/projects/project-content/datetime-formatter/datetime-formatter.component';
import { WorkspaceComponent } from './workspace/workspace.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SkillsComponent,
    ExperienceComponent,
    AboutMeComponent,
    HireMeComponent,
    ProjectsComponent,
    BlogsComponent,
    TalksComponent,
    TelephonyChatComponent,
    DatetimeFormatterComponent,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
