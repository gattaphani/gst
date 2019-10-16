import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import{fullobject} from './invoice'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  gstinvoiceform



  constructor(private DataService: DataService, private fb: FormBuilder, private dataservice: DataService, 
    private sanitizer: DomSanitizer,private router:Router, private route: ActivatedRoute) {

    
  }


  ngOnInit() {
    this.gstinvoiceform = this.fb.group({
      "gstin": [null, Validators.required],
      "ret_period": [null, Validators.required],
      "gt": [null, Validators.required],
      "cur_gt": [null, Validators.required],


      //"b2b": [null, Validators.required],
      "ctin": [null, Validators.required],
      //"inv": [null, Validators.required],
      "inum": [null, Validators.required],
      "idt": [null, Validators.required],
      "val": [null, Validators.required],
      "pos": [null, Validators.required],
      "rchrg": [null, Validators.required],
      "etin": [null, Validators.required],
      "inv_typ": [null, Validators.required],
      "diff_percent": [null, Validators.required],
      // "itms":[null, Validators.required],
      "num": [null, Validators.required],
      "itm_det": [null, Validators.required],
      "rt": [null, Validators.required],
      "txval": [null, Validators.required],
      "iamt": [null, Validators.required],
      "csamt": [null, Validators.required],
      //b2ba
      // "ctin":[null, Validators.required],
      "oinum": [null, Validators.required],
      "oidt": [null, Validators.required],
      "camt": [null, Validators.required],
      "samt": [null, Validators.required],
      "sply_ty": [null, Validators.required],
      // "diff_percent":[null, Validators.required],
      // "rt":[null, Validators.required],
      "typ": [null, Validators.required],
      "omon": [null, Validators.required],

      "expt_amt": [null, Validators.required],
      "nil_amt": [null, Validators.required],
      "ngsup_amt": [null, Validators.required],



    });

    
      
    }

    

   


  


}
