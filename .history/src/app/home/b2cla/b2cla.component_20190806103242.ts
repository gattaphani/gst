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

  constructor() { }

  ngOnInit() {
  }

}
