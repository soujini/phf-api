
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { HeaderComponent } from './header/header.component';
import { MakeComponent } from './make/make.component';
import { ModelComponent } from './model/model.component';
import { VariantComponent } from './variant/variant.component';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { TransmissionTypeComponent } from './transmission-type/transmission-type.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { InsuranceTypeComponent } from './insurance-type/insurance-type.component';
import { ColorComponent } from './color/color.component';
import { CarComponent } from './car/car.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    HeaderComponent,
    MakeComponent,
    ModelComponent,
    VariantComponent,
    VehicleTypeComponent,
    FuelTypeComponent,
    TransmissionTypeComponent,
    InsuranceComponent,
    InsuranceTypeComponent,
    ColorComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
