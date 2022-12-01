import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewsoldierComponent } from './newsoldier/newsoldier.component';
import { NotImplementedComponent } from './not-implemented/not-implemented.component';
import { PlayComponent } from './play/play.component';
import { CampComponent } from './camp/camp.component';
import { NewServiceComponent } from './new-service/new-service.component';
import { CampsComponent } from './camps/camps.component';
import { SoldiersComponent } from './soldiers/soldiers.component';
import { ServicesLstComponent } from './services-lst/services-lst.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NewsoldierComponent,
    NotImplementedComponent,
    PlayComponent,
    CampComponent,
    NewServiceComponent,
    CampsComponent,
    SoldiersComponent,
    ServicesLstComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
