import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BartenderComponent } from './bartender/bartender.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthGuardClientService } from './auth-guard-client.service';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'menu', component: MenuComponent},
  {path:'login', component: LoginComponent},
  {path:'inventory', component: InventoryComponent, canActivate: [AuthGuardService]},
  {path:'bartender', component: BartenderComponent, canActivate: [AuthGuardService]},
  {path:'checkout', component: CheckoutComponent}/*,

  {path:'about', component:},
  {path:'events', component:}
  {path:'**', component: NotFoundComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
