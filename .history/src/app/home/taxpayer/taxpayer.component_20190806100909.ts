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
  updateDateById: any;

  constructor(private http:HttpClient, private fb:FormBuilder,
    private auth: AuthService, private dataservice:DataService) { }
    taxpayerform:FormGroup
    isCreated:boolean;
    isUpdated:boolean;
  ngOnInit() {
    
     this.taxpayerform=this.fb.group({
      'taxPayersType':['',Validators.required],
      'updatedDate':['',Validators.required],
      'taxpayerstypeName':['',Validators.required],
      'email':['',Validators.required]
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


 addbutton(taxpayerform)
 {
  this.isCreated=true;
  this.isUpdated=false;
  taxpayerform.reset();
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

 getbyid(id)
 {
   debugger;
  this.isCreated=false;
  this.isUpdated=true;
  this.dataservice.getTaxpayersId(id).subscribe(data => {
    this.getById = data.resultData;

    this.taxpayerform.patchValue({
      //'taxpayerstypeName': this.getById.taxpayerstypeName,
      'taxPayersType':this.getById.taxPayersType,
      'updatedDate': this.getById.updatedDate,
      'email': this.getById.email,
    });
    console.log('getbyid',this.getById);
  })
 }

 updateTaxpayer(updateDataById)
 {
   debugger;
  updateDataById['id'] = this.getById.id;
   updateDataById['taxPayersType'] = this.getById.taxPayersType;
   //updateDataById['taxpayerstypeName'] = this.getById.taxpayerstypeName;
  updateDataById['email'] = this.getById.email;
  updateDataById['lastUpdatedBy'] = sessionStorage.getItem('userId');
  console.log(updateDataById);
  this.dataservice.updateTaxpayers(updateDataById).subscribe(data => {
  this.updateDateById = data;
  console.log('updated data',this.updateDateById);
  this.getTaxpayer();
  
  })

}

}
