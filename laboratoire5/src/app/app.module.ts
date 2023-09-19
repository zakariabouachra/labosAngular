import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FriandisesListComponent } from './components/friandises-list/friandises-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FriandisesAjoutComponent } from './components/friandises-ajout/friandises-ajout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FriandisesListComponent,
    FriandisesAjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
