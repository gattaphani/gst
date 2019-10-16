import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService } from '../../services/auth.service'
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-taxpayer',
  templateUrl: './taxpayer.component.html',
  styleUrls: ['./taxpayer.component.scss']
})
export class TaxpayerComponent implements OnInit {
  datas: any
  getById: any;

  constructor(private http:HttpClient, private fb:FormBuilder,
    private auth: AuthService, private dataservice:DataService) { }
    taxpayerform:FormGroup
    isCreated:boolean;
    isUpdated:boolean;
  ngOnInit() {
    
     this.taxpayerform=this.fb.group({
      'taxPayersType':['',Validators.required],
      'updatedDate':['',Validators.required]
     })

     this.getTaxpayer();
  }

  getTaxpayer()
  {
    this.dataservice.getTaxpayers().subscribe(data => {
    this.datas = data.resultData;
    console.log('datas',this.datas);
  })
 }


 addbutton()
 {
  this.isCreated=true;
  this.isUpdated=false;
 }

 createTaxpayers(taxdata)
 {
  let requestobj={};
  requestobj['taxPayersType'] = taxdata.taxPayersType;
  //requestobj['updatedDate'] = taxdata.updatedDate;
  //requestobj['status'] = taxdata.status;
  requestobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
  this.dataservice.createTaxpayers(requestobj).subscribe(data => {
  this.datas = data;
  this.getTaxpayer();
  
  })
 }

 getbyid()
 {
  this.isCreated=false;
  this.isUpdated=true;
  this.dataservice.getTaxpayersId(id).subscribe(data => {
    this.getById = data.resultData;

    this.taxpayerform.patchValue({
      'taxPayersType': this.getById.taxPayersType
    });
    
  })
 }

 updateTaxpayer(updateDataById) 
 {
  updateDataById['id'] = this.updateData.id;
  updateDataById['lastUpdatedBy'] = sessionStorage.getItem('userId');
  console.log(updateDataById);
  this.dataservice.updatePositionTypeById(updateDataById).subscribe(data => {
  this.updateDateById = data;
  this.getUser();
  console.log(this.updateDateById);
  })

}

}
