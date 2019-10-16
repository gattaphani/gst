import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/index/services/index.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { gstr2object } from '../gstr2/gstr2';


@Component({
  selector: 'app-gstr2b2burform',
  templateUrl: './gstr2b2burform.component.html',
  styleUrls: ['./gstr2b2burform.component.scss']
})
export class Gstr2b2burformComponent implements OnInit {

  constructor(private fb: FormBuilder, private dataservice: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }
    gstr2form:FormGroup;
  ngOnInit() {
    this.gstr2form = this.fb.group({

      "chksumb2bur": [null, Validators.required],
      "inumb2bur": [null, Validators.required],
      "idtb2bur": [null, Validators.required],
      "valb2bur": [null, Validators.required],
      "posb2bur": [null, Validators.required],
      "sply_tyb2bur": [null, Validators.required],
      "numb2bur": [null, Validators.required],
      "rtb2bur": [null, Validators.required],
      "txvalb2bur": [null, Validators.required],
      "iamtb2bur": [null, Validators.required],
      "camtb2bur": [null, Validators.required],
      "samtb2bur": [null, Validators.required],
      "csamtb2bur": [null, Validators.required],
      "elgb2bur": [null, Validators.required],
      "tx_ib2bur": [null, Validators.required],
      "tx_sb2bur": [null, Validators.required],
      "tx_cb2bur": [null, Validators.required],
      "tx_csb2bur": [null, Validators.required],

  })

}


// gstr2b2bur()
// {
//   this.router.navigate(['/gstr2b2bur']);
// }