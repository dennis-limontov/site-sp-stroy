import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './menu/contacts/contacts.component';
import { ProductsComponent } from './menu/products/products.component';
import { ServicesComponent } from './menu/services/services.component';
import { NewsComponent } from './menu/news/news.component';
import { PortfolioComponent } from './menu/portfolio/portfolio.component';

// определение маршрутов
const appRoutes: Routes =[
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
    path: 'main',
    pathMatch: 'full',
    component: MainPageComponent
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductsComponent
  },
  {
    path: 'services',
    pathMatch: 'full',
    component: ServicesComponent
  }, 
  {
    path: 'news',
    pathMatch: 'full',
    component: NewsComponent
  }, 
  {
    path: 'portfolio',
    pathMatch: 'full',
    component: PortfolioComponent
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
    ProductsComponent,
    ContactsComponent,
    NewsComponent,
    ServicesComponent,
    PortfolioComponent      
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
