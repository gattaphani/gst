import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import{fullobject} from '../invoice';
import { IndexService } from 'src/app/index/services/index.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  gstinvoiceform:FormGroup;
  invoiceres: any;



  constructor(private DataService: DataService, private fb: FormBuilder, private dataservice: DataService, 
    private sanitizer: DomSanitizer,private router:Router, private route: ActivatedRoute, private index:IndexService) {

    
  }


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
      "rchrg": [null, Validators.required],
      "etin": [null, Validators.required],
      "inv_typ": [null, Validators.required],
      "diff_percent": [null, Validators.required],
     
      "num": [null, Validators.required],
      "itm_det": [null, Validators.required],
      "rt": [null, Validators.required],
      "txval": [null, Validators.required],
      "iamt": [null, Validators.required],
      "csamt": [null, Validators.required],
    
      "oinum": [null, Validators.required],
      "oidt": [null, Validators.required],
      "camt": [null, Validators.required],
      "samt": [null, Validators.required],
      "sply_ty": [null, Validators.required],
   
      "typ": [null, Validators.required],
      "omon": [null, Validators.required],

      "expt_amt": [null, Validators.required],
      "nil_amt": [null, Validators.required],
      "ngsup_amt": [null, Validators.required],



    });
this.saveGSTInvoiceobj();
  }

  
  saveGSTInvoiceobj(){

debugger;
        
  
    //console.log(this.gstinvoiceform.value)
    let fullObject:fullobject = 
    
      {
        gstin:this.gstinvoiceform.get('gstin').value,
        ret_period:this.gstinvoiceform.get('ret_period').value,
        gt:this.gstinvoiceform.get('gt').value,
        cur_gt:this.gstinvoiceform.get('cur_gt').value,
        b2b:[{
          ctin:this.gstinvoiceform.get('ctin').value,
        inv: [
          {
    
            inum: this.gstinvoiceform.get('inum').value,
    
            idt: this.gstinvoiceform.get('idt').value,
    
            val: this.gstinvoiceform.get('val').value,
    
            pos:this.gstinvoiceform.get('pos').value,
    
            rchrg:this.gstinvoiceform.get('rchrg').value,
    
            etin: this.gstinvoiceform.get('etin').value,
    
            inv_typ: this.gstinvoiceform.get('inv_typ').value,
    
            diff_percent:this.gstinvoiceform.get('diff_percent').value,
    
            itms: [
              {
               num: this.gstinvoiceform.get('num').value,
    
                itm_det: {
    
                  rt: this.gstinvoiceform.get('rt').value,
    
                  txval: this.gstinvoiceform.get('txval').value,
    
                  iamt:this.gstinvoiceform.get('iamt').value,
    
                  csamt:this.gstinvoiceform.get('csamt').value
    
                }
    
              }
    
            ]
    
          }
    
        ]
      }
    ],
    
    b2ba:[{
      ctin:this.gstinvoiceform.get('ctin').value,
    inv: [
    
      {
    
        oinum: this.gstinvoiceform.get('oinum').value,
    
        oidt: this.gstinvoiceform.get('oidt').value,
    
        inum:this.gstinvoiceform.get('inum').value,
        idt:this.gstinvoiceform.get('idt').value,
        val: this.gstinvoiceform.get('val').value,
    
        pos:this.gstinvoiceform.get('pos').value,
    
        rchrg:this.gstinvoiceform.get('rchrg').value,
    
        etin: this.gstinvoiceform.get('etin').value,
    
        inv_typ: this.gstinvoiceform.get('inv_typ').value,
    
        diff_percent:this.gstinvoiceform.get('diff_percent').value,
    
        itms: [
          {
           num: this.gstinvoiceform.get('num').value,
    
            itm_det: {
    
              rt: this.gstinvoiceform.get('rt').value,
    
              txval: this.gstinvoiceform.get('txval').value,
    
              iamt:this.gstinvoiceform.get('iamt').value,
              camt:this.gstinvoiceform.get('iamt').value,
              samt:this.gstinvoiceform.get('iamt').value,
              csamt:this.gstinvoiceform.get('csamt').value,
    
            }
    
          }
    
        ]
    
      }
    
    ]
    }
    ],
    b2cl:[
      {
        pos: this.gstinvoiceform.get('pos').value,
        inv:[
          {
          inum: this.gstinvoiceform.get('inum').value,
          idt: this.gstinvoiceform.get('idt').value,
          val: this.gstinvoiceform.get('val').value,
          inv_typ: this.gstinvoiceform.get('inv_typ').value,
          etin: this.gstinvoiceform.get('etin').value,
          diff_percent: this.gstinvoiceform.get('diff_percent').value,
          itms:[
            {
              num:this.gstinvoiceform.get('num').value,
              itm_det:
              {
                rt:this.gstinvoiceform.get('rt').value,
                txval:this.gstinvoiceform.get('txval').value,
                iamt:this.gstinvoiceform.get('iamt').value,
                csamt:this.gstinvoiceform.get('csamt').value,
              }
    
            }
          ]
        }
        ]
      }
    ],
    b2cla:[
      {
        pos:this.gstinvoiceform.get('pos').value,
        inv:[
          {
            oinum:this.gstinvoiceform.get('oinum').value,
            oidt:this.gstinvoiceform.get('oidt').value,
            inv_typ:this.gstinvoiceform.get('inv_typ').value,
            diff_percent:this.gstinvoiceform.get('diff_percent').value,
            inum:this.gstinvoiceform.get('inum').value,
            idt:this.gstinvoiceform.get('idt').value,
            val:this.gstinvoiceform.get('val').value,
            etin:this.gstinvoiceform.get('val').value,
            itms:[
              {
                num:this.gstinvoiceform.get('num').value,
                itm_det:
                {
                  rt:this.gstinvoiceform.get('rt').value,
                  txval:this.gstinvoiceform.get('txval').value,
                  iamt:this.gstinvoiceform.get('txval').value,
                }
              }
            ]
          }
        ]
      }
    ],
    b2cs:[
      {
        rt:this.gstinvoiceform.get('rt').value,
        sply_ty:this.gstinvoiceform.get('sply_ty').value,
        diff_percent:this.gstinvoiceform.get('diff_percent').value,
       
        typ:this.gstinvoiceform.get('typ').value,
         etin:this.gstinvoiceform.get('etin').value,
     
        txval:this.gstinvoiceform.get('txval').value,
        iamt:this.gstinvoiceform.get('iamt').value,
        csamt:this.gstinvoiceform.get('iamt').value,
        pos:this.gstinvoiceform.get('pos').value,
      }
      // {
      //   rt:this.gstinvoiceform.get('rt').value,
      //   sply_ty:this.gstinvoiceform.get('sply_ty').value,
      //   diff_percent:this.gstinvoiceform.get('diff_percent').value,
      //   typ:this.gstinvoiceform.get('typ').value,
      //   etin:this.gstinvoiceform.get('etin').value,
      //   txval:this.gstinvoiceform.get('txval').value,
      //   iamt:this.gstinvoiceform.get('iamt').value,
      //   csamt:this.gstinvoiceform.get('csamt').value,
      //   pos:this.gstinvoiceform.get('pos').value,
      // }
    ],
    b2csa:[
      {
        omon:this.gstinvoiceform.get('omon').value,
        sply_ty:this.gstinvoiceform.get('sply_ty').value,
        diff_percent:this.gstinvoiceform.get('diff_percent').value,
        typ:this.gstinvoiceform.get('typ').value,
        etin:this.gstinvoiceform.get('etin').value,
        pos:this.gstinvoiceform.get('pos').value,
        itms:[
          {
            rt:this.gstinvoiceform.get('rt').value,
            txval:this.gstinvoiceform.get('txval').value,
            iamt:this.gstinvoiceform.get('iamt').value,
            camt:this.gstinvoiceform.get('camt').value,
            samt:this.gstinvoiceform.get('samt').value,
            csamt:this.gstinvoiceform.get('csamt').value,
          }
          // {
          //   rt:this.gstinvoiceform.get('rt').value,
          //   txval:this.gstinvoiceform.get('txval').value,
          //   iamt:this.gstinvoiceform.get('iamt').value,
          //   camt:this.gstinvoiceform.get('camt').value,
          //   samt:this.gstinvoiceform.get('samt').value,
          //   csamt:this.gstinvoiceform.get('csamt').value,
          // }
        ]
      }
    ],
    nil:
        {
        inv:[
        {
          sply_ty:this.gstinvoiceform.get('sply_ty').value,
          expt_amt:this.gstinvoiceform.get('expt_amt').value,
          nil_amt:this.gstinvoiceform.get('nil_amt').value,
          ngsup_amt:this.gstinvoiceform.get('ngsup_amt').value,
        }
        // {
        //   sply_ty:this.gstinvoiceform.get('sply_ty').value,
        //   expt_amt:this.gstinvoiceform.get('expt_amt').value,
        //   nil_amt:this.gstinvoiceform.get('nil_amt').value,
        //   ngsup_amt:this.gstinvoiceform.get('ngsup_amt').value,
        // }
      ]
    }
    
    }
      //  var userData = sessionStorage.getItem('userData');
      debugger;
      console.log(fullObject);
      this.index.saveGstInvoice(fullObject).subscribe(response => {
        this.invoiceres = response;
        console.log(this.invoiceres)
      })
    }
}
// {
//   "gstin": "27AHQPA7588L1ZJ",
//   "ret_period": "122019",
//   "gt": 3782969.01,
//   "cur_gt": 3782969.01,
//   "b2b": [
//     {
//       "ctin": "01AABCE2207R1Z5",
//       "inv": [
//         {
//           "inum": "S008400",
//           "idt": "24-11-2016",
//           "val": 729248.16,
//           "pos": "06",
//           "rchrg": "N",
//           "etin": "01AABCE5507R1C4",
//           "inv_typ": "R",    
//           "diff_percent": 0.65,
//           "itms": [
//             {
//               "num": 1,
//               "itm_det": {
//                 "rt": 5,
//                 "txval": 10000,
//                 "iamt": 325,
//                 "csamt": 500
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   "b2ba": [
//     {
//       "ctin": "01AABCE2207R1Z5",
//       "inv": [
//         {
//           "oinum": "S008400",
//           "oidt": "24-11-2016",
//           "inum": "S008400",
//           "idt": "24-11-2016",
//           "val": 729248.16,
//           "pos": "06",
//           "rchrg": "N",
//           "etin": "01AABCE5507R1C4",
//           "inv_typ": "R",
//           "diff_percent": 0.65,
//           "itms": [
//             {
//               "num": 1,
//               "itm_det": {
//                 "rt": 5,
//                 "txval": 10000,
//                 "iamt": 325,
//                 "camt": 0,
//                 "samt": 0,
//                 "csamt": 500
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ],"b2cl": [
//     {
//       "pos": 5,
//       "inv": [
//         {
//           "inum": "92661",
//           "idt": "10-01-2016",
//           "val": 784586.33,
//           "inv_typ": "CBW",
//           "etin": "27AHQPA8875L1CU",
//           "diff_percent": 0.65,
//           "itms": [
//             {
//               "num": 1,
//               "itm_det": {
//                 "rt": 5,
//                 "txval": 10000,
//                 "iamt": 325,
//                 "csamt": 500
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ]
// ,
//   "b2cla": [
//     {
//       "pos": "06",
//       "inv": [
//         {
//           "oinum": "9266",
//           "oidt": "10-02-2016",
//           "inv_typ": "CBW",
//           "diff_percent": 0.65,
//           "inum": "92661",
//           "idt": "10-01-2016",
//           "val": 784586.33,
//           "etin": "01AABCE5507R1C4",
//           "itms": [
//             {
//               "num": 1,
//               "itm_det": {
//                 "rt": 5,
//                 "txval": 10000,
//                 "iamt": 833.33
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   "b2cs": [
//     {
//       "sply_ty": "INTER",
//       "diff_percent": 0.65,
//       "rt": 5,
//       "typ": "E",
//       "etin": "01AABCE5507R1C4",
//       "pos": "05",
//       "txval": 110,
//       "iamt": 10,
//       "csamt": 10
//     },
//     {
//       "rt": 6,
//       "sply_ty": "INTER",
//       "diff_percent": 0.65,
//       "typ": "OE",
//       "txval": 100,
//       "iamt": 10,
//       "csamt": 10,
//       "pos": "05"
//     }
//   ],
//   "b2csa": [
//     {
//       "omon": "122016",
//       "sply_ty": "INTER",
//       "diff_percent": 0.65,
//       "typ": "E",
//       "etin": "01AABCE5507R1C4",
//       "pos": "05",
//       "itms": [
//         {
//           "rt": 5,
//           "txval": 110,
//           "iamt": 10,
//           "camt": 0,
//           "samt": 0,
//           "csamt": 10
//         },
//         {
//           "rt": 12,
//           "txval": 110,
//           "iamt": 10,
//           "camt": 0,
//           "samt": 0,
//           "csamt": 10
//         }
//       ]
//     }
//   ],
//   "nil": {
//     "inv": [
//       {
//         "sply_ty": "INTRB2B",
//         "expt_amt": 123.45,
//         "nil_amt": 1470.85,
//         "ngsup_amt": 1258.5
//       },
//       {
//         "sply_ty": "INTRB2C",
//         "expt_amt": 123.45,
//         "nil_amt": 1470.85,
//         "ngsup_amt": 1258.5
//       }
//     ]
//   }
  
// }