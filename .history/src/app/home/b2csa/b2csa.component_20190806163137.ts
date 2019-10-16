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
  }

}
