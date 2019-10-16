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

  constructor(private http:HttpClient, private fb:FormBuilder,
    private auth: AuthService, private dataservice:DataService) { }

  ngOnInit() {
    
    this.addforms=this.fb.group({
      'positionType':['',Validators.required],
    
      'positionTypeName':['',Validators.required],
      })

       this.getUser();
  }

}
