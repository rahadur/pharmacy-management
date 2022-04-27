import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  medicineForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.medicineForm = this.fb.group({
      medicine: ['', [Validators.required]],
      generic: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });

    if (this.data) {
      this.medicineForm.patchValue(this.data);
    }
  }

  saveMedicine(): void {
    this.dialogRef.close(this.medicineForm.value);
  }
}
