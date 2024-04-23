import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  { path: 'landing', loadChildren: () => import('./Topnav/landing.module').then(m => m.LandingModule) },

  { path: 'bodychart', loadChildren: () => import('./bodychart/bodychart.module').then(m => m.BodychartModule) },

  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) },

  { path: 'dark', loadChildren: () => import('./dark/dark.module').then(m => m.DarkModule) },

  {path:'footer', loadChildren:()=> import('./footer/footer.module').then(m=>m.FooterModule)},

  {path:'layout', loadChildren:()=> import('./layout/layout.module').then(m=>m.LayoutModule)},

  { path: 'sidenav', loadChildren: () => import('./sidenav/sidenav.module').then(m => m.SidenavModule) },
  { path: 'swipe', loadChildren: () => import('./swipe/swipe.module').then(m => m.SwipeModule) },
  // { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  // { path: 'searchSuggest', loadChildren: () => import('./searchSuggest/searchSuggest.module').then(m => m.SearchSuggestModule) },
  { path: 'loaders', loadChildren: () => import('./loaders/loaders.module').then(m => m.LoadersModule) },
  // { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
  // { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  // { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule) },
  { path: 'layout', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  { path: 'stepper', loadChildren: () => import('./stepper/stepper.module').then(m => m.StepperModule) },
  { path: 'notify', loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
