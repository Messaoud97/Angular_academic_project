import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ForamteursComponent } from './foramteurs/foramteurs.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { ParticipantComponent } from './participant/participant.component';
import { FormsModule }   from '@angular/forms';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { AddSession } from './add-session/add-session.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavbarComponent,
    AcceuilComponent,
    ForamteursComponent,
    AddFormateurComponent,
    AddParticipantComponent,
    SessionItemComponent,
    ParticipantComponent,
    UpdateParticipantComponent,
    UpdateFormateurComponent,
    SessionItemListComponent,
    AddSession
  ],
  imports: [
    FormsModule,

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

    