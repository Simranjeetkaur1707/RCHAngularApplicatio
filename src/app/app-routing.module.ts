import { NgModule } from '@angular/core';
import { Routes, RouterModule , ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SetlocationComponent } from './setlocation/setlocation.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { EcComponent } from './ec/ec.component';
import { AnmAshaComponent } from './anm-asha/anm-asha.component';
import { HeaderComponent } from './header/header.component';
import { AshaComponent } from './asha/asha.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'setlocation',component:SetlocationComponent},
  {path:'dataentry',component:DataentryComponent},
  {path:'ec',component:EcComponent},
  {path:'anm-asha',component:AnmAshaComponent},
  {path:'header',component:HeaderComponent},
  {path:'asha',component:AshaComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
