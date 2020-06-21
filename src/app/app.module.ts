import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './menu/main-page/main-page.component';
import { ContactsComponent } from './menu/contacts/contacts.component';
import { ProductsComponent } from './menu/products/products.component';
import { ServicesComponent } from './menu/services/services.component';
import { NewsComponent } from './menu/news/news.component';
import { PortfolioComponent } from './menu/portfolio/portfolio.component';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: MainPageComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'main', component: MainPageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent}, 
  { path: 'news', component: NewsComponent}, 
  { path: 'portfolio', component: PortfolioComponent}, 

  
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
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
