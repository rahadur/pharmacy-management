import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  purchaseForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initPurchaseForm();
  }


  get items() {
    return this.purchaseForm.controls['items'] as FormArray;
  }

  convertToGroup(itemGroup) {
    return itemGroup as FormGroup;
  }

  addPurchaseItem(): void {
    const group = this.fb.group({
      category: [''],
      medicine: [''],
      unit: [''],
      batchNO: [''],
      quantity: [''],
      amount: [''],
      discount: [''],
      total: ['']
    })

    this.items.push(group);
  }

  removePurchaseItem(index: number): void {
    this.items.removeAt(index)
  }


  private initPurchaseForm(): void {
    this.purchaseForm = this.fb.group({
      purchaseNo: [''],
      purchaseDate: [''],
      supplier: [''],
      note: [''],
      items: this.fb.array([]),
      paymentType: [''],
      subtotal: [''],
      fixDiscount: [''],
      grandTotal: [''],
      payment: [''],
    });

    this.addPurchaseItem();
  }

}
