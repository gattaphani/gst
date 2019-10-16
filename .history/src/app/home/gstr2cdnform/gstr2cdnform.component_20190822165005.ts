import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';
import { gstr2object } from './../gstr2/gstr2';

@Component({
  selector: 'app-gstr2cdnform',
  templateUrl: './gstr2cdnform.component.html',
  styleUrls: ['./gstr2cdnform.component.scss']
})
export class Gstr2cdnformComponent implements OnInit {

  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.gstr2form = this.fb.group({
      "ctincdn": [null, Validators.required],
      "nttycdn": [null, Validators.required],
      "nt_numcdn": [null, Validators.required],
      "nt_dtcdn": [null, Validators.required],
      "rsncdn": [null, Validators.required],
      "p_gstcdn": [null, Validators.required],
      "inumcdn": [null, Validators.required],
      "idtcdn": [null, Validators.required],
      "valcdn": [null, Validators.required],
      "numcdn": [null, Validators.required],
      "rtcdn": [null, Validators.required],
      "txvalcdn": [null, Validators.required],
      "iamtcdn": [null, Validators.required],
      "camtcdn": [null, Validators.required],
      "samtcdn": [null, Validators.required],
      "csamtcdn": [null, Validators.required],
      "elgcdn": [null, Validators.required],
      "tx_icdn": [null, Validators.required],
      "tx_scdn": [null, Validators.required],
      "tx_ccdn": [null, Validators.required],
      "tx_cscdn": [null, Validators.required],
    })

  }

}
