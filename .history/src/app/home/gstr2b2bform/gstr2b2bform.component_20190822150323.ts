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
  gstr2form:F
  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.gstr2form = this.fb.group({
      "gstin": [null, Validators.required],
      "fp": [null, Validators.required],
      "ctin": [null, Validators.required],
      "inum": [null, Validators.required],
      "idt": [null, Validators.required],
      "val": [null, Validators.required],
      "pos": [null, Validators.required],
      "rchrg": [null, Validators.required],
      "inv_typ": [null, Validators.required],

      "num": [null, Validators.required],
      "rt": [null, Validators.required],
      "txval": [null, Validators.required],
      "iamt": [null, Validators.required],
      "camt": [null, Validators.required],
      "samt": [null, Validators.required],
      "csamt": [null, Validators.required],

      "elg": [null, Validators.required],
      "tx_i": [null, Validators.required],
      "tx_s": [null, Validators.required],
      "tx_c": [null, Validators.required],
      "tx_cs": [null, Validators.required],
      
      "flag": [null, Validators.required],
      "chksumb2b": [null, Validators.required],
      "inumb2b": [null, Validators.required],
      "idtb2b": [null, Validators.required],
      "valb2b": [null, Validators.required],
      "posb2b": [null, Validators.required],
      "rchrgb2b": [null, Validators.required],
      "inv_typb2b": [null, Validators.required],
      "numb2b": [null, Validators.required],
      "rtb2b": [null, Validators.required],
      "txvalb2b": [null, Validators.required],
      "iamtb2b": [null, Validators.required],
      "camtb2b": [null, Validators.required],
      "samtb2b": [null, Validators.required],
      "csamtb2b": [null, Validators.required],
      "elgb2b": [null, Validators.required],
      "tx_ib2b": [null, Validators.required],
      "tx_sb2b": [null, Validators.required],
      "tx_cb2b": [null, Validators.required],
      "tx_csb2b": [null, Validators.required],

  

  }

gstr2b2b(){
  this.router.navigate(['/gstr2b2b']);
}

}
