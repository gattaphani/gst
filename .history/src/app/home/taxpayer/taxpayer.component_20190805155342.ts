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

  constructor(private http:HttpClient, private fb:FormBuilder,
    private auth: AuthService, private dataservice:DataService) { }
    taxpayerform:FormGroup
  ngOnInit() {
    
     this.taxpayerform=this.fb.group({
      'taxPayersType':['',Validators.required],
    
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

 createPositions(){
  var requestObj = {
    "taxPayersType": this.taxPayersType,
    "positionTypeId":this.countryValue,
    "advtNumber":this.advtNumber,
    "eligibilityCriteria":this.eligibilityCriteria,
    "regStartDate":this.regStartDate,
    "regEndDate":this.regEndDate,
    "positionCode":this.positionCodes,
    "lastUpdatedBy": sessionStorage.getItem('userId'),
    
  }
  console.log(requestObj);
  this.dataservice.createPositions(requestObj).subscribe(data => {
    this.positionsCreate = data;
    this.getposition();
    console.log(this.positionsCreate);
  })
}


addata(positiontype)
{
  let requestobj={};
  requestobj['positionTypeName']=positiontype;
  requestobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
  this.dataservice.sendpositiondata(requestobj).subscribe(data => {
  this.datas = data;
  this.getUser();
  this.postionType = '';
  })
}



}
