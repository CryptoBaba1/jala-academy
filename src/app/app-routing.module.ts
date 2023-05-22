import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { MultipleTabsComponent } from './multiple-tabs/multiple-tabs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PopupsComponent } from './popups/popups.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { SliderComponent } from './slider/slider.component';
import { TooltipsComponent } from './tooltips/tooltips.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component:DashboardContentComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'adminlogin', component: AdminLoginComponent},
  {path: 'multipletabs', component: MultipleTabsComponent},
  {path: 'menuitems', component: MenuItemsComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'tooltips', component: TooltipsComponent},
  {path:'popups', component: PopupsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
