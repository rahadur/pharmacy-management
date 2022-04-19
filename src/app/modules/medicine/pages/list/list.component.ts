import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openMedicineForm(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '600px',
      data: {
        medicineName: 'Medicine-1',
        genericName: 'Generic name'
      }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
