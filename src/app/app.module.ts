import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageComponent } from './page/page.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UploadComponent } from './upload/upload.component';
import { StartupComponent } from './startup/startup.component';
import { MncsingupComponent } from './mncsingup/mncsingup.component';
import { FormsModule } from '@angular/forms';
import { StartsignupComponent } from './startsignup/startsignup.component';
import { FreesignupComponent } from './freesignup/freesignup.component';
import { MncComponent } from './mnc/mnc.component';
import { Contact1Component } from './contact1/contact1.component';
import { PaymentComponent } from './payment/payment.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { FreerequireComponent } from './freerequire/freerequire.component';
import { StartuploginComponent } from './startuplogin/startuplogin.component';
import { MncloginComponent } from './mnclogin/mnclogin.component';
import { LogoutComponent } from './logout/logout.component';
import { FreeloginComponent } from './freelogin/freelogin.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    BannerComponent,
    PageComponent,
    FreelanceComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UploadComponent,
    StartupComponent,
    MncsingupComponent,
    StartsignupComponent,
    FreesignupComponent,
    MncComponent,
    Contact1Component,
    PaymentComponent,
    ProjectpageComponent,
    FreerequireComponent,
    StartuploginComponent,
    MncloginComponent,
    LogoutComponent,
    FreeloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
