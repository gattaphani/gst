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
import { ApplicationlistComponent } from './applicationlist/applicationlist.component';
import { AdministrativeuserComponent } from './administrativeuser/administrativeuser.component';
import { EmployementtypeComponent } from './employementtype/employementtype.component';
import { PositiontypeComponent } from './positiontype/positiontype.component';
import { PositionsComponent } from './positions/positions.component';
import { CategoryComponent } from './category/category.component';
import { FeestructureComponent } from './feestructure/feestructure.component';
import { DesignationComponent } from './designation/designation.component';
import { ApplicationComponent } from './application/application.component';
import { RegisteredcandidateComponent } from './registeredcandidate/registeredcandidate.component';
import { EmployeementinfoComponent } from './employeementinfo/employeementinfo.component';
import { VerifyComponent } from './verify/verify.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TaxpayerComponent } from './taxpayer/taxpayer.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { B2claComponent } from './b2cla/b2cla.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { B2csaComponent } from './b2csa/b2csa.component';
import { Gstr3bComponent } from './gstr3b/gstr3b.component';
import { Gstr2Component } from './gstr2/gstr2.component';
import { GstregistrationComponent } from './gstregistration/gstregistration.component';



export const HomeRoutes: Routes = [
    {path:'',component:HomeComponent,canActivate:[AuthGuard],
    children:[
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'invoice',component:InvoiceComponent},
    {path:'gstr3b',component:Gstr3bComponent},
    {path:'taxpayer',component:TaxpayerComponent},
    {path:'state',component:StateComponent},
    {path:'district',component:DistrictComponent},
    {path:'B2cla',component:B2claComponent},
    {path:'B2csa',component:B2csaComponent},
    {path:'gstr2',component:Gstr2Component},
    {path:'gstr',component:Gstr2Component},
    {path:'dashboard/:appNo', component: DashboardComponent},
    {path:'users',component:UsersComponent},
    {path:'ethenicgroup',component:EthenicgroupComponent},
	  {path:'status',component:StatusComponent},
    {path:'specialevent',component:SpecialeventComponent},
    {path:'userdetail',component:UserdetailsComponent},
    {path:'servicerequest',component:ServicerequestComponent},
    {path:'testcode',component:TestcodeComponent},
    {path:'postalcode',component:PostalcodeComponent},
    {path:'applicationlist',component:ApplicationlistComponent},
    {path:'administrativeuser',component:AdministrativeuserComponent},
    {path:'employementtype',component:EmployementtypeComponent},
    {path:'positiontype',component:PositiontypeComponent},
    {path:'positions',component:PositionsComponent},
    {path:'category',component:CategoryComponent},
    {path:'feestructure',component:FeestructureComponent},
    {path:'designation',component:DesignationComponent},
    {path:'application',component:ApplicationComponent},
    {path:'registered',component:RegisteredcandidateComponent},
    {path:'empinfo',component:EmployeementinfoComponent},
    {path:'empinfo/:id',component:EmployeementinfoComponent},
    {path:'verify',component:VerifyComponent},
    {path:'userList', component: UserlistComponent},
    
   
  ]
}]
