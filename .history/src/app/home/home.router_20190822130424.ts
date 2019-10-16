import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
// import { Routes } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../gaurds/auth.guard';
import { UsersComponent } from './users/users.component';
import { EthenicgroupComponent } from './ethenicgroup/ethenicgroup.component';
import { StatusComponent } from './status/status.component';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import { TestcodeComponent } from './testcode/testcode.component';
import { PostalcodeComponent } from './postalcode/postalcode.component';
import { RegisteredcandidateComponent } from './registeredcandidate/registeredcandidate.component';
import { EmployeementinfoComponent } from './employeementinfo/employeementinfo.component';
import { VerifyComponent } from './verify/verify.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TaxpayerstypeComponent } from './taxpayerstype/taxpayerstype.component';
import { StateComponent } from './state/state.component';
import { DesignationComponent } from './designation/designation.component';
import { DistrictComponent } from './district/district.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

import { B2bComponent } from './b2b/b2b.component';
import { B2clComponent } from './b2cl/b2cl.component';
import { B2claComponent } from './b2cla/b2cla.component';
import { B2csComponent } from './b2cs/b2cs.component';
import { B2csaComponent } from './b2csa/b2csa.component';
import { Gstr1Component } from './gstr1/gstr1.component';
import { Gstr2Component } from './gstr2/gstr2.component';
import { Gstr3bComponent } from './gstr3b/gstr3b.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Gstr2b2bComponent } from './gstr2b2b/gstr2b2b.component';
import { Gstr2b2bformComponent } from './gstr2b2bform/gstr2b2bform.component';



export const HomeRoutes: Routes = [
    {path:'',component:HomeComponent,canActivate:[AuthGuard],
    children:[
    {path:'registered',component:RegisteredcandidateComponent},
    {path:'taxtype', component:TaxpayerstypeComponent},
    {path:'state', component:StateComponent},
    {path:'district', component:DistrictComponent},
    {path:'designation', component:DesignationComponent},
    {path:'dashboard',component:DashboardComponent},
    // {path:'dashboard1',component:Dashboard1Component},
    {path:'users',component:UsersComponent},
    {path:'ethenicgroup',component:EthenicgroupComponent},
	  {path:'status',component:StatusComponent},
    {path:'specialevent',component:SpecialeventComponent},
    {path:'userdetail',component:UserdetailsComponent},
    {path:'servicerequest',component:ServicerequestComponent},
    {path:'testcode',component:TestcodeComponent},
    {path:'postalcode',component:PostalcodeComponent},
   
    {path:'empinfo',component:EmployeementinfoComponent},
    {path:'empinfo/:id',component:EmployeementinfoComponent},
    {path:'verify',component:VerifyComponent},
    {path:'userList', component: UserlistComponent},
    {path:'b2b', component: B2bComponent}, 
    {path:'b2cl', component: B2clComponent}, 
    {path:'b2cla', component: B2claComponent}, 
    {path:'b2cs', component: B2csComponent}, 
    {path:'b2csa', component: B2csaComponent}, 
    
    {path:'gstr1', component: Gstr1Component}, 
    {path:'gstr2', component: Gstr2Component}, 
    {path:'gstr3b', component: Gstr3bComponent}, 
    {path:'dashboard1/:id',component:Dashboard1Component},
    {path:'dashboard2/:id',component:Dashboard2Component},
    {path:'gstr2b2b', component: Gstr2b2bComponent} 
    {path:'gstr2b2bform', component: Gstr2b2bComponent} 
  ]
}]
