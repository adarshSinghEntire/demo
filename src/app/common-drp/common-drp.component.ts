import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';
import Utility from './utility';
import { DRP_CONFIG } from './common-dropdown';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-common-drp',
  templateUrl: './common-drp.component.html',
  styleUrls: ['./common-drp.component.css']
})
export class CommonDrpComponent {


  selectVendorNum: boolean = false;
  selectedArr: any;


  purchaseOrderForm =new FormControl();
  @Output() selectedOut: EventEmitter<any> = new EventEmitter<any>();


  // for reset form 
 @Input() set configuration(value: DRP_CONFIG) {
  console.log(value);
  
  if (value) {
    this.checkAllConfigurations(value);
  }
}

@Input() set setDisabledControl(val:boolean){
  if (val) {
   this.setDisabled(val);
  }
}

@Input() set getSelectedItem(value: string) {

  if (!value || (Object.keys(value)?.length === 0)) {
    this.selectedArr = [];
    this.purchaseOrderForm.patchValue(null)
   }
   else{
    this.selectedArr = value;
    // this.getAllVendorList.push(value)
    this.purchaseOrderForm.patchValue(this.selectedArr[this.BIND_By])
   }

}

  getAllVendorList:any = [];
    constructor( 
      private http: HttpClient){
   
  }

  ngOnInit(){
    this.apiHandler()
  }

  onVendorChange(data: any) {
    this.selectedArr = data;
    this.sendSelectedDataHandler(data);
  }

  onShowAll(e: any) {

  }

  BIND_By:any;
  isDisabled:boolean = false;
  PLACEHOLDER!: string;
  API_Path: string = '';
  isRequired: boolean = false;

  checkAllConfigurations(config: DRP_CONFIG) {
    this.BIND_By = config?.BINDBY;
    this.PLACEHOLDER = config.PLACEHOLDER;
    this.API_Path = config.API;
    this.isRequired = config.REQUIRED;
    if (config.REQUIRED) {
      this.purchaseOrderForm.setValidators([Validators.required]);
      this.purchaseOrderForm.updateValueAndValidity();
    }
  
  }


  apiHandler() {
    this.http.get(this.API_Path).subscribe((data:any)=>{
      this.getAllVendorList = data;
    })
  }

  setDisabled(isDisabled:boolean){
    if (isDisabled) {
      this.isDisabled = isDisabled;
      this.purchaseOrderForm.disable();
    }
  }
  sendSelectedDataHandler(data:any){
    this.selectedOut.emit(data);
  }

  openSlectBox(select: NgSelectComponent) {
    Utility.openSlectBox(select);
  }
}
