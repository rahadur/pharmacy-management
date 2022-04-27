import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';



import { MedicineRoutingModule } from './medicine-routing.module';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './components/form/form.component';
import { ShardModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ShardModule,
    MatDialogModule,
    MedicineRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class MedicineModule { }
