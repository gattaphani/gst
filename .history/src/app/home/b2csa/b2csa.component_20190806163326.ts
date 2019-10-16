import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService } from '../../services/auth.service'
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-b2csa',
  templateUrl: './b2csa.component.html',
  styleUrls: ['./b2csa.component.scss']
})
export class B2csaComponent implements OnInit {

  constructor(private http:HttpClient, private fb:FormBuilder,
    private auth: AuthService, private dataservice:DataService) { }

  ngOnInit() {
    this.getb2csa();
  }
 getb2csa()
{
  this.dataservice.getb2csa().subscribe(data=>{
    this.getb2csadata = data;
    this.b2claArr.push(this.getb2cladata);
    console.log('getb2cladata',this.getb2cladata);
  })
}
}
