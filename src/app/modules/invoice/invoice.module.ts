import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { ShardModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PurchaseComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    ShardModule
  ]
})
export class InvoiceModule { }
