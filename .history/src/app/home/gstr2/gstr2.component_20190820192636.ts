import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/index/services/index.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { gstr2object } from './gstr2';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-gstr2',
  templateUrl: './gstr2.component.html',
  styleUrls: ['./gstr2.component.scss']
})
export class Gstr2Component implements OnInit {
  gstr2res: any;
  constructor(private fb: FormBuilder, private dataservice: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }

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
      "chksum": [null, Validators.required],
      //"inum": [null, Validators.required],
      //"idt": [null, Validators.required],
     // "val": [null, Validators.required],
      //"pos": [null, Validators.required],
      //"rchrg": [null, Validators.required],
      //"inv_typ": [null, Validators.required],

     "sply_ty": [null, Validators.required],


     //"ctin": [null, Validators.required],

     "ntty": [null, Validators.required],
     "nt_num": [null, Validators.required],
     "nt_dt": [null, Validators.required],
     "rsn": [null, Validators.required],
     "p_gst": [null, Validators.required],
     //"inum": [null, Validators.required],



     "hsn_sc": [null, Validators.required],
     "desc": [null, Validators.required],
     "uqc": [null, Validators.required],
     "qty": [null, Validators.required],
     "ival": [null, Validators.required],


     "is_sez": [null, Validators.required],
     "stin": [null, Validators.required],
     "boe_num": [null, Validators.required],
     "boe_dt": [null, Validators.required],
     "boe_val": [null, Validators.required],
     "port_code": [null, Validators.required],
    
     "cpddr": [null, Validators.required],
     "exptdsply": [null, Validators.required],
     "ngsply": [null, Validators.required],
     "nilsply": [null, Validators.required],


     "rtin": [null, Validators.required],
      "ty": [null, Validators.required],
      "inter": [null, Validators.required],
      "intra": [null, Validators.required],


      "adamt": [null, Validators.required],
      "isd_docty": [null, Validators.required],
      //"chksum": [null, Validators.required],
      "docdt": [null, Validators.required],
      "docnum": [null, Validators.required],
      "itc_elg": [null, Validators.required],
    });

  }

  }

}
