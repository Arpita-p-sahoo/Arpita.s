import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { GDGComponent } from './Dilogs/communityDialogs/gdg/gdg.component';
import { WTMComponent } from './Dilogs/communityDialogs/wtm/wtm.component';
import { DEVFESTComponent } from './Dilogs/communityDialogs/devfest/devfest.component';
import { WtmComponent } from './Dilogs/wtm/wtm.component';
import { GdgComponent } from './Dilogs/gdg/gdg.component';
import { ContatMeComponent } from './Dilogs/contat-me/contat-me.component';
import { TodoComponent } from './Dilogs/todo/todo.component';
import { MatChipsModule } from '@angular/material/chips';

const MaterialComponents=[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,MatCardModule,MatDialogModule,MatChipsModule
]
@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents],
  declarations: [
    GDGComponent,
    WTMComponent,
    DEVFESTComponent,
    WtmComponent,
    GdgComponent,
    ContatMeComponent,
    TodoComponent
  ],
   
})
export class MaterialModule { }
