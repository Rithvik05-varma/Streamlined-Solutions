import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UploadComponent } from './upload/upload.component';
import { MncComponent } from './mnc/mnc.component';
import { StartupComponent } from './startup/startup.component';
import { MncsingupComponent } from './mncsingup/mncsingup.component';
import { StartsignupComponent } from './startsignup/startsignup.component';
import { FreesignupComponent } from './freesignup/freesignup.component';
import { FreelanceComponent } from './freelance/freelance.component';
import { Contact1Component } from './contact1/contact1.component';
import { PaymentComponent } from './payment/payment.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { FreerequireComponent } from './freerequire/freerequire.component';
import { StartuploginComponent } from './startuplogin/startuplogin.component';
import { MncloginComponent } from './mnclogin/mnclogin.component';
import { FreeloginComponent } from './freelogin/freelogin.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'upload',component:UploadComponent},
  {path:'mnc',component:MncComponent},
  {path:'startup',component:StartupComponent},
  {path:'mncsingup',component:MncsingupComponent},
  {path:'startsignup',component:StartsignupComponent},
  {path:'freesignup',component:FreesignupComponent},
  {path:'freelance',component:FreelanceComponent},
  {path:'rithvik1.jpg',component:MncsingupComponent},
  {path:'contact1',component:Contact1Component},
  {path:'payment',component:PaymentComponent},
  {path:'projectpage',component:ProjectpageComponent},
  {path:'freerequire',component:FreerequireComponent},
  {path:'startuplogin',component:StartuploginComponent},
  {path:'mnclogin',component:MncloginComponent},
  {path:'freelogin',component:FreeloginComponent},
  {path:'**',component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
