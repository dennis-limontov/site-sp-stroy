import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './menu/contacts/contacts.component';
import { HistoryComponent } from './menu/history/history.component';
import { ServicesComponent } from './menu/services/services.component';

// определение маршрутов
const appRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'contacts',
    pathMatch: 'full',
    component: ContactsComponent
  },
  {
    path: 'history',
    pathMatch: 'full',
    component: HistoryComponent
  },
  {
    path: 'services',
    pathMatch: 'full',
    component: ServicesComponent
  },
  {
    path: '**',
    redirectTo: '/',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    HistoryComponent,
    ContactsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
