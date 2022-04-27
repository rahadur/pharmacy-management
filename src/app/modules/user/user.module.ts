import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';


import { UserRoutingModule } from './user-routing.module';
import { NewComponent } from './pages/new/new.component';
import { ShardModule } from 'src/app/shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';


@NgModule({
  declarations: [
    NewComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    ShardModule,
    UserRoutingModule,
    MatStepperModule
  ]
})
export class UserModule { }
