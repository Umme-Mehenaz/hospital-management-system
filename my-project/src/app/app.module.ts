import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from '@angular/forms';
import { InsertComponent } from './insert/insert.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientComponent } from './patient/patient.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { CreateComponent } from './create/create.component';
import { PloginComponent } from './plogin/plogin.component';
import { Administrator1Component } from './administrator1/administrator1.component';
import { Doctor1Component } from './doctor1/doctor1.component';
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
import { PreleaseComponent } from './prelease/prelease.component';
import { ReleseinvoiceComponent } from './releseinvoice/releseinvoice.component';
import { DischargeComponent } from './discharge/discharge.component';
import { ChartComponent } from './chart/chart.component';
import { SeatbookingComponent } from './seatbooking/seatbooking.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    InsertComponent,
    DoctorsComponent,
    PatientComponent,
    AdministratorComponent,
    CreateComponent,
    PloginComponent,
    Administrator1Component,
    Doctor1Component,
    UpdateComponent,
    AppointmentComponent,
    ViewAppComponent,
    SearchComponent,
    PatientinfoComponent,
    PatientupdComponent,
    OurserviceComponent,
    DiagnosisComponent,
    DocinfoComponent,
    DocloginComponent,
    DbillComponent,
    SearchbillComponent,
    BillinfoComponent,
    PadmitComponent,
    SearchbinfoComponent,
    DreportinfoComponent,
    PreleaseComponent,
    ReleseinvoiceComponent,
    DischargeComponent,
    ChartComponent,
    SeatbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CanvasJSAngularChartsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
