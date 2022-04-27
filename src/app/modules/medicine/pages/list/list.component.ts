import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormComponent } from '../../components/form/form.component';


interface Medicine {
  id: number;
  medicine: string;
  generic: string;
  category: string;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'medicine', 'generic', 'category'];
  dataSource: MatTableDataSource<Medicine>

  randomData: Medicine[] = [];

  constructor(
    public dialog: MatDialog
  ) { 

    for(let i = 1; i <= 100; i++) {
      this.randomData.push({
        id: i,
        medicine: `Medicine-${i}`,
        generic: `Generic-${i}`,
        category: `Category-${i}`
      })
    }

    //console.log(this.randomData);
  
    this.dataSource = new MatTableDataSource(this.randomData);

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(target) {
    let filterValue = target.value.trim() // 'Medicine ' => 'Medicine'
    filterValue = filterValue.toLowerCase(); // 'Medicine' => 'medicine'
    this.dataSource.filter = filterValue; // medicine
  }


  openMedicineForm(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '600px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      const id = this.dataSource.data.length + 1
      this.dataSource.data.push({id, ...result})
    });
  }

}
