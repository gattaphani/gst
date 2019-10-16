import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { fullobject } from '../invoice';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';

@Component({
  selector: 'app-gstr2b2bform',
  templateUrl: './gstr2b2bform.component.html',
  styleUrls: ['./gstr2b2bform.component.scss']
})
export class Gstr2b2bformComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

gstr2b2b(){
  this.router.navigate(['/gstr2b2bform']);
}

}
