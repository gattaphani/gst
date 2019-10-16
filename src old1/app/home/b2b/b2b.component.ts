import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { fullobject } from '../invoice';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';

@Component({
  selector: 'app-b2b',
  templateUrl: './b2b.component.html',
  styleUrls: ['./b2b.component.scss']
})
export class B2bComponent implements OnInit {
  gstinvoiceform: FormGroup;
  getinvoice: any;

  invoiceres: any;
  public departmentid;

  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
 private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
   

    this.gstinvoiceform = this.fb.group({
      "gstin": [null, Validators.required],
      "ret_period": [null, Validators.required],
      "gt": [null, Validators.required],
      "cur_gt": [null, Validators.required],
      "ctin": [null, Validators.required],
      "inum": [null, Validators.required],
      "idt": [null, Validators.required],
      "val": [null, Validators.required],
      "pos": [null, Validators.required],
      "rchrg": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "etin": [null, Validators.required],
      "inv_typ": [null, Validators.required],
      "diff_percent": [null, Validators.required],

      "num": [null, Validators.required],
      "rt": [null, Validators.required],
      "txval": [null, Validators.required],
      "iamt": [null, Validators.required],
      "csamt": [null, Validators.required],

  })
  this.getb2bInvoice();
}

  b2bList:any;
 
  array:any = [];
  inum:any;

getb2bInvoice() {

   this.dataservice.getB2BInvoice().subscribe(data => {

    
    this.b2bList = data
 this.array.push(this.b2bList)

    console.log('b2b :',this.array)

  })

}



saveGSTInvoiceobj() {

  let fullObject: fullobject =

  {
    gstin: this.gstinvoiceform.get('gstin').value,
    ret_period: this.gstinvoiceform.get('ret_period').value,
    gt: this.gstinvoiceform.get('gt').value,
    cur_gt: this.gstinvoiceform.get('cur_gt').value,
    b2b: [{
      ctin: this.gstinvoiceform.get('ctin').value,
      inv: [
        {

          inum: this.gstinvoiceform.get('inum').value,

          idt: this.gstinvoiceform.get('idt').value,

          val: this.gstinvoiceform.get('val').value,

          pos: this.gstinvoiceform.get('pos').value,

          rchrg: this.gstinvoiceform.get('rchrg').value,

          etin: this.gstinvoiceform.get('etin').value,

          inv_typ: this.gstinvoiceform.get('inv_typ').value,

          diff_percent: this.gstinvoiceform.get('diff_percent').value,

          itms: [
            {
              num: this.gstinvoiceform.get('num').value,

              itm_det: {

                rt: this.gstinvoiceform.get('rt').value,

                txval: this.gstinvoiceform.get('txval').value,

                iamt: this.gstinvoiceform.get('iamt').value,

                csamt: this.gstinvoiceform.get('csamt').value

              }

            }

          ]

        }

      ]
    }
    ],

   


  }


  console.log(fullObject);

  this.getinvoice = fullObject
  sessionStorage.setItem('gstInNum', this.getinvoice.gstin);
  sessionStorage.setItem('returnPeriod', this.getinvoice.ret_period);

  this.index.saveGstInvoice(fullObject).subscribe(response => {
    this.invoiceres = response;



    console.log(this.invoiceres);


    {
      swal(this.invoiceres.ref_Id, "", "success");
    }

  })


}

}