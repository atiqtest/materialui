import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Topnav/landing.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SwipeComponent } from './swipe/swipe.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchSuggestComponent } from './search-suggest/search-suggest.component';
import { LoadersComponent } from './loaders/loaders.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { LoginComponent } from './sign-in-up/login/login.component';
import { TabsComponent } from './sign-in-up/tabs/tabs.component';
import { LayoutComponent } from './layout/layout.component';
import { BodychartComponent } from './bodychart/bodychart.component';
import { StepperComponent } from './stepper/stepper.component';
import { NotificationComponent } from './notification/notification.component';
import { DarkComponent } from './dark/dark.component';
import { Lay1Component } from './layout/lay1/lay1/lay1.component';
import { Card1Component } from './cards/card1/card1.component';

const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'cards',component:CardsComponent},
  {path:'cards1',component:Card1Component},
  {path:'footer',component:FooterComponent},
  {path:'sidenav',component:SidenavComponent},

  {path:'swipe',component:SwipeComponent},
  {path:'search',component:SearchbarComponent},
  {path:'searchSuggest',component:SearchSuggestComponent},

  {path:'loaders',component:LoadersComponent},

  {path:'signup',component:SignInUpComponent},
  {path:'login',component:LoginComponent},
  {path:'tabs',component:TabsComponent},
  {path:'stepper',component:StepperComponent},

  {path:'body',component:BodychartComponent},

  {path:'notify',component:NotificationComponent},
  {path:'dark',component:DarkComponent},



  {path:'layout',component:LayoutComponent},
  {path:'layout1',component:Lay1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
