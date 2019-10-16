import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService } from '../../services/auth.service'
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-b2cla',
  templateUrl: './b2cla.component.html',
  styleUrls: ['./b2cla.component.scss']
})
export class B2claComponent implements OnInit {
  getb2cladata: any;
  b2claArr: any=[];

  constructor(private http:HttpClient, private fb:FormBuilder,
    private auth: AuthService, private dataservice:DataService) { }

  ngOnInit() {
this.getb2cla();
  }
 getb2cla()
{
  this.dataservice.getb2cla().subscribe(data=>{
    this.getb2cladata = data;
    this.b2claArr.push(this.getb2cladata);
    console.log('b2claArr',this.b2claArr);
  })
}
}
