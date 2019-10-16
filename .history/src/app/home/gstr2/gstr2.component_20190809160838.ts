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

  constructor(private fb: FormBuilder, private dataservice: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }

    gstr2form:FormGroup;
    gstr3bres:any;
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
     //"val": [null, Validators.required],


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
    });

  }



  savegst3bobj(){

    let Gstr2object:gstr2object = 
    {
      gstin:this.gstr2form.get('gstin').value,
      fp:this.gstr2form.get('fp').value,
      b2b:
      [
        {
          ctin:this.gstr2form.get('gstin').value,
          inv:[
            {
              inum:this.gstr2form.get('inum').value,
              idt:this.gstr2form.get('idt').value,
              val:this.gstr2form.get('val').value,
              pos:this.gstr2form.get('pos').value,
              rchrg:this.gstr2form.get('rchrg').value,
              inv_typ:this.gstr2form.get('inv_typ').value,
              itms:
              [
                {
                  num:this.gstr2form.get('num').value,
                  itm_det:
                  {
                    rt:this.gstr2form.get('rt').value,
                    txval:this.gstr2form.get('txval').value,
                    iamt:this.gstr2form.get('iamt').value,
                    camt:this.gstr2form.get('camt').value,
                    samt:this.gstr2form.get('samt').value,
                    csamt:this.gstr2form.get('csamt').value,
                  },
                  itc:{
                    elg:this.gstr2form.get('elg').value,
                    tx_i:this.gstr2form.get('tx_i').value,
                    tx_s:this.gstr2form.get('tx_s').value,
                    tx_c:this.gstr2form.get('tx_c').value,
                    tx_cs:this.gstr2form.get('tx_cs').value,
                  }
                }
              ]
            },
            // {
            //   flag:this.gstr2form.get('flag').value,
            //   chksum:this.gstr2form.get('chksum').value,
            //   inum:this.gstr2form.get('inum').value,
            //   idt:this.gstr2form.get('idt').value,
            //   val:this.gstr2form.get('val').value,
            //   pos:this.gstr2form.get('pos').value,
            //   rchrg:this.gstr2form.get('rchrg').value,
            //   inv_typ:this.gstr2form.get('inv_typ').value,
            //   itms:this.gstr2form.get('itms').value,
            //   [
            //     {

            //     }
            //   ]
            // }
          ]
        }
      ],
      b2bur:
      [
        {
          inv:
          [
            {
              chksum:this.gstr2form.get('chksum').value,
              inum:this.gstr2form.get('inum').value,
               idt:this.gstr2form.get('idt').value,
               val:this.gstr2form.get('val').value,
               pos:this.gstr2form.get('pos').value,
               sply_ty:this.gstr2form.get('sply_ty').value,
               itms:
               [
                {
                  num:this.gstr2form.get('num').value,
                  itm_det:
                  {
                    rt:this.gstr2form.get('rt').value,
                    txval:this.gstr2form.get('txval').value,
                    iamt:this.gstr2form.get('iamt').value,
                    camt:this.gstr2form.get('camt').value,
                    samt:this.gstr2form.get('samt').value,
                    csamt:this.gstr2form.get('csamt').value,
                  },
                  itc:{
                    elg:this.gstr2form.get('elg').value,
                    tx_i:this.gstr2form.get('tx_i').value,
                    tx_s:this.gstr2form.get('tx_s').value,
                    tx_c:this.gstr2form.get('tx_c').value,
                    tx_cs:this.gstr2form.get('tx_cs').value,
                  }
                }
               ]
            }
          ]
        }
      ],
      cdn:
      [
        {
          ctin:this.gstr2form.get('ctin').value,
          nt:
          [
            {
              ntty:this.gstr2form.get('ntty').value,
              nt_num:this.gstr2form.get('nt_num').value,
              nt_dt:this.gstr2form.get('nt_dt').value,
              rsn:this.gstr2form.get('rsn').value,
              p_gst:this.gstr2form.get('p_gst').value,
              inum:this.gstr2form.get('inum').value,
              idt:this.gstr2form.get('idt').value,
              val:this.gstr2form.get('val').value,
              itms:
              [
                {
                  num:this.gstr2form.get('num').value,
                  itm_det:
                  {
                    rt:this.gstr2form.get('rt').value,
                    txval:this.gstr2form.get('txval').value,
                    iamt:this.gstr2form.get('iamt').value,
                    camt:this.gstr2form.get('camt').value,
                    samt:this.gstr2form.get('samt').value,
                    csamt:this.gstr2form.get('csamt').value,
                  },
                  itc:{
                    elg:this.gstr2form.get('elg').value,
                    tx_i:this.gstr2form.get('tx_i').value,
                    tx_s:this.gstr2form.get('tx_s').value,
                    tx_c:this.gstr2form.get('tx_c').value,
                    tx_cs:this.gstr2form.get('tx_cs').value,
                  }
                }
               ]
            }
          ]
        }
      ],
      hsnsum;
      [
        {
          det:
          [
            {
              num:this.gstr2form.get('tx_cs').value,
              hsn_sc:this.gstr2form.get('hsn_sc').value,
              desc:this.gstr2form.get('tx_cs').value,
              uqc:this.gstr2form.get('tx_cs').value,
              qty:this.gstr2form.get('tx_cs').value,
              val:this.gstr2form.get('tx_cs').value,
              txval:this.gstr2form.get('tx_cs').value,
              iamt:this.gstr2form.get('tx_cs').value,
              camt:this.gstr2form.get('tx_cs').value,
              samt:this.gstr2form.get('tx_cs').value,
              csamt:this.gstr2form.get('tx_cs').value,
            }
          ]
        }
      ]
      
      
   










    

    }
      console.log('Gstr2object',Gstr2object);
      this.index.saveGstr3bInvoice(Gstr2object).subscribe(response => {
        this.gstr3bres = response;
        console.log(this.gstr3bres);
        {
          swal(this.gstr3bres.ref_id, "","success");
           }
              
      })



}




// {
//   "gstin": "07CQZCD1111I4Y3",
//   "fp": "012016",
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
//           "inv_typ": "R",
//           "itms": [
//             {
//               "num": 1,
//               "itm_det": {
//                 "rt": 10.1,
//                 "txval": 6210.99,
//                 "iamt": 0,
//                 "camt": 614.44,
//                 "samt": 5.68,
//                 "csamt": 621.09
//               },
//               "itc": {
//                 "elg": "ip",
//                 "tx_i": 147.2,
//                 "tx_s": 159.3,
//                 "tx_c": 159.3,
//                 "tx_cs": 0
//               }
//             }
//           ]
//         l},
//         {
//           "flag": "M",
//           "chksum": "adsgshaklfsgdhdydudjdk",
//           "inum": "S008401",
//           "idt": "24-11-2016",
//           "val": 729248.16,
//           "pos": "06",
//           "rchrg": "N",
//           "inv_typ": "R",
//           "itms": [
//             {
//               "num": 1,
//               "itm_det": {
//                 "rt": 10.1,
//                 "txval": 6210.99,
//                 "iamt": 0,
//                 "camt": 614.44,
//                 "samt": 5.68,
//                 "csamt": 621.09
//               },
//               "itc": {
//                 "elg": "ip",
//                 "tx_i": 147.2,
//                 "tx_s": 159.3,
//                 "tx_c": 159.3,
//                 "tx_cs": 0
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   "b2bur": [
//     {
//       "inv": [
//         {
//           "chksum": "AflJufPlFStqKBZ",
//           "inum": "S008400",
//           "idt": "24-11-2016",
//           "val": 729248.16,
//           "pos": "06",
//           "sply_ty": "INTRA",
//           "itms": [
//             {
//               "num": 1,
//               "itm_det": {
//                 "rt": 10.1,
//                 "txval": 6210.99,
//                 "camt": 614.44,
//                 "samt": 5.68,
//                 "iamt": 0,
//                 "csamt": 621.09
//               },
//               "itc": {
//                 "elg": "ip",
//                 "tx_s": 159.3,
//                 "tx_c": 159.3,
//                 "tx_i": 0,
//                 "tx_cs": 0
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   "cdn": [
//     {
//       "ctin": "01AAAAP1208Q1ZS",
//       "nt": [
//         {
//           "ntty": "C",
//           "nt_num": "533515",
//           "nt_dt": "23-09-2016",
//           "rsn": "Not Mentioned",
//           "p_gst": "N",
//           "inum": "915914",
//           "idt": "23-09-2016",
//           "val": 7348.2,
//           "itms": [
//             {
//               "num": 1,
//               "itm_det": {
//                 "rt": 10,
//                 "txval": 5225.28,
//                 "iamt": 845.22,
//                 "camt": 37661.29,
//                 "samt": 42.13,
//                 "csamt": 789.52
//               },
//               "itc": {
//                 "elg": "ip",
//                 "tx_i": 147.2,
//                 "tx_s": 159.3,
//                 "tx_c": 159.3,
//                 "tx_cs": 0
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ],
//   "hsnsum": {
//     "det": [
//       {
//         "num": 1,
//         "hsn_sc": "40561111",
//         "desc": "Goods Description",
//         "uqc": "Kg",
//         "qty": 80,
//         "val": 9000.5,
//         "txval": 8451.65,
//         "iamt": 0,
//         "camt": 0.83,
//         "samt": 6736920.69,
//         "csamt": 0
//       }
//     ]
//   },
//   "imp_g": [
//     {
//       "is_sez": "Y",
//       "stin": "01AABCE2207R1Z5",
//       "boe_num": "2566209",
//       "boe_dt": "18-04-2016",
//       "boe_val": 338203.29,
//       "port_code": "002409",
//       "itms": [
//         {
//           "num": 1,
//           "txval": 582.88,
//           "rt": 10.5,
//           "iamt": 159.3,
//           "csamt": 159.3,
//           "elg": "ip",
//           "tx_i": 123.02,
//           "tx_cs": 0
//         }
//       ]
//     }
//   ],
//   "imp_s": [
//     {
//       "inum": "85619",
//       "idt": "22-03-2016",
//       "ival": 962559.86,
//       "pos": "28",
//       "itms": [
//         {
//           "num": 1,
//           "txval": 582.88,
//           "elg": "ip",
//           "rt": 10.5,
//           "iamt": 123.02,
//           "csamt": 0,
//           "tx_i": 500,
//           "tx_cs": 0
//         }
//       ]
//     }
//   ],
//   "nil_supplies": {
//     "inter": {
//       "cpddr": 0,
//       "exptdsply": 5394970.87,
//       "ngsply": 992.93,
//       "nilsply": 0
//     },
//     "intra": {
//       "cpddr": 1000,
//       "exptdsply": 5394970.87,
//       "ngsply": 992.93,
//       "nilsply": 0
//     }
//   },
//   "txi": [
//     {
//       "pos": "05",
//       "sply_ty": "INTER",
//       "itms": [
//         {
//           "num": 1,
//           "rt": 5,
//           "adamt": 100,
//           "iamt": 9400,
//           "camt": 0,
//           "samt": 0,
//           "csamt": 500
//         }
//       ]
//     }
//   ],
//   "txpd": [
//     {
//       "pos": "05",
//       "sply_ty": "INTER",
//       "itms": [
//         {
//           "num": 1,
//           "rt": 5,
//           "adamt": 100,
//           "iamt": 9400,
//           "camt": 0,
//           "samt": 0,
//           "csamt": 500
//         }
//       ]
//     }
//   ],
//   "itc_rvsl": {
//     "rule2_2": {
//       "iamt": 0,
//       "camt": 13,
//       "samt": 13,
//       "csamt": 12
//     },
//     "rule7_1_m": {
//       "iamt": 0,
//       "camt": 13,
//       "samt": 13,
//       "csamt": 12
//     },
//     "rule8_1_h": {
//       "iamt": 0,
//       "camt": 13,
//       "samt": 13,
//       "csamt": 12
//     },
//     "rule7_2_a": {
//       "iamt": 0,
//       "camt": 13,
//       "samt": 13,
//       "csamt": 12
//     },
//     "rule7_2_b": {
//       "iamt": 0,
//       "camt": 13,
//       "samt": 13,
//       "csamt": 12
//     },
//     "revitc": {
//       "iamt": 0,
//       "camt": 13,
//       "samt": 13,
//       "csamt": 12
//     },
//     "other": {
//       "iamt": 0,
//       "camt": 13,
//       "samt": 13,
//       "csamt": 12
//     }
//   },
//   "cdnur": [
//     {
//       "rtin": "01AAAAP1208Q1ZS",
//       "ntty": "C",
//       "nt_num": "533515",
//       "nt_dt": "23-09-2016",
//       "rsn": "Not Mentioned",
//       "p_gst": "N",
//       "inum": "915914",
//       "idt": "23-09-2016",
//       "val": 7348.2,
//       "inv_typ": "B2BUR",
//       "itms": [
//         {
//           "num": 1,
//           "itm_det": {
//             "rt": 10,
//             "txval": 5225.28,
//             "camt": 37661.29,
//             "samt": 42.13,
//             "iamt": 0,
//             "csamt": 789.52
//           },
//           "itc": {
//             "elg": "ip",
//             "tx_s": 159.3,
//             "tx_c": 159.3,
//             "tx_i": 0,
//             "tx_cs": 0
//           }
//         }
//       ]
//     }
//   ],
//   "isd": [
//     {
//       "ctin": "16DEFPS8555D1Z7",
//       "doclist": [
//         {
//           "chksum": "AflJufPlFStqKBZ",
//           "isd_docty": "ISD",
//           "docnum": "1004",
//           "docdt": "02-03-2016",
//           "itc_elg": "N",
//           "tx_i": 0,
//           "tx_c": 0,
//           "tx_s": 0,
//           "tx_cs": 0
//         }
//       ]
//     }
//   ]
// }


 }




