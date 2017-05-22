import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { ShoppingcartComponent } from '../app/share/header/shoppingcart/shoppingcart.component';
import { MenuComponent } from '../app/share/menu/menu.component';
import { SliderComponent } from '../app/homepage/slider/slider.component';
import { WidgetComponent } from '../app/share/widget/widget.component';
import { ProductsComponent } from '../app/homepage/products/products.component';
import { ProductsDataService } from '../app/homepage/products/products-data.service';
import { DetailComponent } from '../app/detailpage/detail.component';
import { HomeComponent } from '../app/homepage/home.component';
import { ContactComponent } from '../app/contactpage/contact.component';



@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      { path : 'home', component:HomeComponent },
      { path : 'detail/:id', component:DetailComponent },
      { path : 'contact', component:ContactComponent },
      { path : '', redirectTo: 'home', pathMatch: 'full' },
      { path : '**', redirectTo: 'home', pathMatch: 'full' },

    ]),
    FormsModule
   ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, ShoppingcartComponent, MenuComponent, SliderComponent, WidgetComponent, ProductsComponent, DetailComponent, HomeComponent, ContactComponent ],
  providers:    [ ProductsDataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
