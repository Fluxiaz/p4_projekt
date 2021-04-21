import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AdministrationComponent } from './administration/administration.component';
import { BasketComponent } from './basket/basket.component';
import { ItemsComponent } from './items/items.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component'

const routes: Routes = [
  { path: 'AdministrationComponet', component: AdministrationComponent },
  { path: 'BasketComponent', component: BasketComponent },
  { path: 'ItemsComponent', component: ItemsComponent },
  { path: 'ProfileComnponent', component: ProfileComponent },
  { path: 'AppComponent', component: AppComponent },
  { path: 'WelcomeComponent', component: WelcomeComponent },


];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],   
})

export class AppRoutingModule { }
export const routingComponets = [AdministrationComponent, BasketComponent, ItemsComponent, ProfileComponent, AppComponent, WelcomeComponent ]
