import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InsertComponent } from './insert/insert.component';
import { PatientComponent } from './patient/patient.component';
import { PloginComponent } from './plogin/plogin.component';
import { CreateComponent } from './create/create.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { Administrator1Component } from './administrator1/administrator1.component';
import { Doctor1Component } from './doctor1/doctor1.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { UpdateComponent } from './update/update.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { ViewAppComponent } from './view-app/view-app.component';
import { SearchComponent } from './search/search.component';
import { PatientinfoComponent } from './patientinfo/patientinfo.component';
import { PatientupdComponent } from './patientupd/patientupd.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { DocinfoComponent } from './docinfo/docinfo.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { DbillComponent } from './dbill/dbill.component';
import { SearchbillComponent } from './searchbill/searchbill.component';
import { BillinfoComponent } from './billinfo/billinfo.component';
import { PadmitComponent } from './padmit/padmit.component';
import { SearchbinfoComponent } from './searchbinfo/searchbinfo.component';
import { DreportinfoComponent } from './dreportinfo/dreportinfo.component';
import { ReleseinvoiceComponent } from './releseinvoice/releseinvoice.component';
import { DischargeComponent } from './discharge/discharge.component';
import { PreleaseComponent } from './prelease/prelease.component';
import { SeatbookingComponent } from './seatbooking/seatbooking.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'insert',component:InsertComponent},
  {path: 'patient',component:PatientComponent},
  {path: 'plogin',component:PloginComponent},
  {path: 'create',component:CreateComponent},
  {path: 'administrator',component:AdministratorComponent},
  {path: 'administrator1',component:Administrator1Component},
  {path: 'doctor1',component:Doctor1Component},
  {path: 'doctors',component:DoctorsComponent},
  {path: 'update/:doc_id',component:UpdateComponent},
  {path: 'appointment/:name/:password',component:AppointmentComponent},
  {path: 'search',component:SearchComponent},
  {path: 'view-app/:userid',component:ViewAppComponent},
  {path: 'patientinfo',component:PatientinfoComponent},
  {path: 'patientupd/:id',component:PatientupdComponent},
  {path: 'ourservice',component:OurserviceComponent},
  {path: 'diagnosis',component:DiagnosisComponent},
  {path: 'docinfo/:id/:email',component:DocinfoComponent},
  {path: 'doclogin',component:DocloginComponent},
  {path: 'dbill',component:DbillComponent},
  {path: 'searchbill',component:SearchbillComponent},
  {path: 'billinfo/:billid',component:BillinfoComponent},
  {path: 'padmit',component:PadmitComponent},
  {path: 'searchbinfo',component:SearchbinfoComponent},
  {path: 'dreportinfo',component:DreportinfoComponent},
  {path: 'releseinvoice',component:ReleseinvoiceComponent},
  { path: 'discharge', component:DischargeComponent},
  { path: 'prelease', component:PreleaseComponent},
  { path: 'seatbooking', component:SeatbookingComponent},
  { path: 'chart', component:ChartComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
