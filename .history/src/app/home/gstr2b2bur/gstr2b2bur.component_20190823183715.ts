import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';

@Component({
  selector: 'app-gstr2b2bur',
  templateUrl: './gstr2b2bur.component.html',
  styleUrls: ['./gstr2b2bur.component.scss']
})
export class Gstr2b2burComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
