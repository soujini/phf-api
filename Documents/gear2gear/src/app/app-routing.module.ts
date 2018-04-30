import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MakeComponent } from './make/make.component';
import { ModelComponent } from './model/model.component';
import { VariantComponent } from './variant/variant.component';
import { VehicleTypeComponent } from './vehicle-type/vehicle-type.component';
import { FuelTypeComponent } from './fuel-type/fuel-type.component';
import { TransmissionTypeComponent } from './transmission-type/transmission-type.component';
import { InsuranceTypeComponent } from './insurance-type/insurance-type.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { ColorComponent } from './color/color.component';
import { CarComponent } from './car/car.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'make', component: MakeComponent},
  { path: 'model', component: ModelComponent},
  { path: 'variant', component: VariantComponent},
  { path: 'vehicleType', component: VehicleTypeComponent},
  { path: 'fuelType', component: FuelTypeComponent},
  { path: 'transmissionType', component: TransmissionTypeComponent},
  { path: 'insuranceType', component: InsuranceTypeComponent},
  { path: 'insurance', component: InsuranceComponent},
  { path: 'color', component: ColorComponent},
  { path: 'car', component: CarComponent}


];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule { }
