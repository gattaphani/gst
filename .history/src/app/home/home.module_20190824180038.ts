import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { EthenicgroupComponent } from './ethenicgroup/ethenicgroup.component';
import { StatusComponent } from './status/status.component';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import { TestcodeComponent } from './testcode/testcode.component';
import { PostalcodeComponent } from './postalcode/postalcode.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RegisteredcandidateComponent } from './registeredcandidate/registeredcandidate.component';
import { AdministrativeuserComponent } from './administrativeuser/administrativeuser.component';
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
import { Gstr3bComponent } from './gstr3b/gstr3b.component';
import { Gstr2Component } from './gstr2/gstr2.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Gstr2b2bComponent } from './gstr2b2b/gstr2b2b.component';
import { Gstr2b2bformComponent } from './gstr2b2bform/gstr2b2bform.component';
import { Gstr2cdnComponent } from './gstr2cdn/gstr2cdn.component';
import { Gstr2cdnformComponent } from './gstr2cdnform/gstr2cdnform.component';
import { Gstr2b2burComponent } from './gstr2b2bur/gstr2b2bur.component';
import { Gstr2b2burformComponent } from './gstr2b2burform/gstr2b2burform.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { Gstr3b1formComponent } from './gstr3b1form/gstr3b1form.component';
import { Gstr3b2formComponent } from './gstr3b2form/gstr3b2form.component';
import { Gstr3bviewComponent } from './gstr3bview/gstr3bview.component';



@NgModule({
  declarations: [DashboardComponent, HelpComponent, UsersComponent, EthenicgroupComponent,StatusComponent,SpecialeventComponent, 
    UserdetailsComponent, ServicerequestComponent, TestcodeComponent, PostalcodeComponent, RegisteredcandidateComponent, 
    AdministrativeuserComponent, EmployeementinfoComponent, VerifyComponent, UserlistComponent, TaxpayerstypeComponent, 
    StateComponent, DesignationComponent, DistrictComponent, Dashboard1Component, B2bComponent, B2clComponent, B2claComponent, 
    B2csComponent, B2csaComponent, Gstr1Component, Gstr3bComponent, Gstr2Component, Dashboard2Component, Gstr2b2bComponent, 
    Gstr2b2bformComponent, Gstr2cdnComponent, Gstr2cdnformComponent, Gstr2b2burComponent, Gstr2b2burformComponent, Dashboard3Component, Gstr3b1Component, Gstr3b2Component, Gstr3b1formComponent, Gstr3b2formComponent, Gstr3bviewComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule,Ng2SearchPipeModule,NgMultiSelectDropDownModule.forRoot(),NgxPaginationModule
  ]
})
export class HomeModule { }
