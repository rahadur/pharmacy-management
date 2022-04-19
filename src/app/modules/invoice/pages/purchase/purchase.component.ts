import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  purchaseForm: FormGroup;
  dataForm: FormGroup;

  editItemIndex = null;

  purchaseItems: any[] = []

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initPurchaseForm();
    this.initDataForm();
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


  addPurchaseData(): void {
    const value = this.dataForm.value
    console.log(value);
    if(this.editItemIndex == null) {
      this.purchaseItems.push(value)
      this.dataForm.reset();

    } else {
      this.purchaseItems[this.editItemIndex] = value;
      this.dataForm.reset();
      this.editItemIndex = null;
    }
    
  }

  editPurchaseItem(item, index): void {
    this.dataForm.patchValue(item);
    this.editItemIndex = index;
  }

  deletePurchaseItem(index): void {
    this.purchaseItems.splice(index, 1);
  }

  removePurchaseItem(index: number): void {
    this.items.removeAt(index)
  }

  private initDataForm(): void {
    this.dataForm = this.fb.group({
      category: [''],
      medicine: [''],
      unit: [''],
      batchNO: [''],
      quantity: [''],
      amount: [''],
      discount: [''],
      total: ['']
    })
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
