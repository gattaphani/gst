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

 createTaxpayers(taxdata)
 {
  let requestobj={};
  requestobj['taxPayersType'] = taxdata.taxPayersType;
  requestobj['updatedDate'] = taxdata.updatedDate;
  requestobj['status'] = taxdata.updatedDate;
  requestobj['lastUpdatedBy'] = sessionStorage.getItem('userId');
  this.dataservice.createTaxpayers(requestobj).subscribe(data => {
  this.datas = data;
  this.getTaxpayer();
  
  })
 }

}
