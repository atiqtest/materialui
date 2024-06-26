import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared/shared.module';
import { LandingComponent } from './Topnav/landing.component';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SwipeComponent } from './swipe/swipe.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchSuggestComponent } from './search-suggest/search-suggest.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoadersComponent } from './loaders/loaders.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { LoginComponent } from './sign-in-up/login/login.component';
import { TabsComponent } from './sign-in-up/tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { BodychartComponent } from './bodychart/bodychart.component';
import { ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { NotificationComponent } from './notification/notification.component';
import { DarkComponent } from './dark/dark.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LayoutComponent,
    CardsComponent,
    FooterComponent,
    SidenavComponent,
    SwipeComponent,
    SearchbarComponent,
    SearchSuggestComponent,
    LoadersComponent,
    SignInUpComponent,
    LoginComponent,
    TabsComponent,
    StepperComponent,
    BodychartComponent,
    NotificationComponent,
    DarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CommonModule,
    SharedModule,
    RouterOutlet,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule
    
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
