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
  gstr2form:FormGroup;
  constructor(private fb: FormBuilder, private dataservice: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }

  ngOnInit() {
    // this.gstr2form = this.fb.group({
    //   "gstin": [null, Validators.required],
    //   "fp": [null, Validators.required],
    //   "ctin": [null, Validators.required],
    //   "inum": [null, Validators.required],
    //   "idt": [null, Validators.required],
    //   "val": [null, Validators.required],
    //   "pos": [null, Validators.required],
    //   "rchrg": [null, Validators.required],
    //   "inv_typ": [null, Validators.required],

    //   "num": [null, Validators.required],
    //   "rt": [null, Validators.required],
    //   "txval": [null, Validators.required],
    //   "iamt": [null, Validators.required],
    //   "camt": [null, Validators.required],
    //   "samt": [null, Validators.required],
    //   "csamt": [null, Validators.required],

    //   "elg": [null, Validators.required],
    //   "tx_i": [null, Validators.required],
    //   "tx_s": [null, Validators.required],
    //   "tx_c": [null, Validators.required],
    //   "tx_cs": [null, Validators.required],
      


    //   "flag": [null, Validators.required],
    //   "chksum": [null, Validators.required],
    //   //"inum": [null, Validators.required],
    //   //"idt": [null, Validators.required],
    //  // "val": [null, Validators.required],
    //   //"pos": [null, Validators.required],
    //   //"rchrg": [null, Validators.required],
    //   //"inv_typ": [null, Validators.required],

    //  "sply_ty": [null, Validators.required],


    //  //"ctin": [null, Validators.required],

    //  "ntty": [null, Validators.required],
    //  "nt_num": [null, Validators.required],
    //  "nt_dt": [null, Validators.required],
    //  "rsn": [null, Validators.required],
    //  "p_gst": [null, Validators.required],
    //  //"inum": [null, Validators.required],



    //  "hsn_sc": [null, Validators.required],
    //  "desc": [null, Validators.required],
    //  "uqc": [null, Validators.required],
    //  "qty": [null, Validators.required],
    //  "ival": [null, Validators.required],


    //  "is_sez": [null, Validators.required],
    //  "stin": [null, Validators.required],
    //  "boe_num": [null, Validators.required],
    //  "boe_dt": [null, Validators.required],
    //  "boe_val": [null, Validators.required],
    //  "port_code": [null, Validators.required],
    
    //  "cpddr": [null, Validators.required],
    //  "exptdsply": [null, Validators.required],
    //  "ngsply": [null, Validators.required],
    //  "nilsply": [null, Validators.required],


    //  "rtin": [null, Validators.required],
    //   "ty": [null, Validators.required],
    //   "inter": [null, Validators.required],
    //   "intra": [null, Validators.required],


    //   "adamt": [null, Validators.required],
    //   "isd_docty": [null, Validators.required],
    //   //"chksum": [null, Validators.required],
    //   "docdt": [null, Validators.required],
    //   "docnum": [null, Validators.required],
    //   "itc_elg": [null, Validators.required],
    // });

  }

  

  // savegstr2obj()
  // {
  //   debugger;
  //   let Gstr2object:gstr2object = 
  //    {
  //      gstin:this.gstr2form.get('gstin').value,
  //      fp:this.gstr2form.get('fp').value,
  //      b2b:
  //     [
  //       {
  //         ctin:this.gstr2form.get('gstin').value,
  //         inv:[
  //           {
  //             inum:this.gstr2form.get('inum').value,
  //             idt:this.gstr2form.get('idt').value,
  //             val:this.gstr2form.get('val').value,
  //             pos:this.gstr2form.get('pos').value,
  //              rchrg:this.gstr2form.get('rchrg').value,
  //             inv_typ:this.gstr2form.get('inv_typ').value,
  //             itms:
  //            [
  //              {
  //                  num:this.gstr2form.get('num').value,
  //                  itm_det:
  //                  {
  //                    rt:this.gstr2form.get('rt').value,
  //                   txval:this.gstr2form.get('txval').value,
  //                   iamt:this.gstr2form.get('iamt').value,
  //                  camt:this.gstr2form.get('camt').value,
  //                  samt:this.gstr2form.get('samt').value,
  //                  csamt:this.gstr2form.get('csamt').value,
  //                  },
  //                  itc:
  //                  {
                    
  //                    elg:this.gstr2form.get('elg').value,
  //                    tx_i:this.gstr2form.get('tx_i').value,
  //                    tx_s:this.gstr2form.get('tx_s').value,
  //                    tx_c:this.gstr2form.get('tx_c').value,
  //                    tx_cs:this.gstr2form.get('tx_cs').value,
  //                  }
  //                }
  //              ]
  //            },
  //            {
  //              flag:this.gstr2form.get('flag').value,
  //              chksum:this.gstr2form.get('chksum').value,
  //              inum:this.gstr2form.get('inum').value,
  //              idt:this.gstr2form.get('idt').value,
  //              val:this.gstr2form.get('val').value,
  //              pos:this.gstr2form.get('pos').value,
  //              rchrg:this.gstr2form.get('rchrg').value,
  //              inv_typ:this.gstr2form.get('inv_typ').value,
  //                itms:
  //              [
  //                {
  //                  num:this.gstr2form.get('num').value,
  //                  itm_det:
  //                  {
  //                    rt:this.gstr2form.get('rt').value,
  //                    txval:this.gstr2form.get('txval').value,
  //                    iamt:this.gstr2form.get('iamt').value,
  //                    camt:this.gstr2form.get('camt').value,
  //                    samt:this.gstr2form.get('samt').value,
  //                    csamt:this.gstr2form.get('csamt').value,
  //                  },
  //                  itc:
  //                  {
                  
  //                    elg:this.gstr2form.get('elg').value,
  //                    tx_i:this.gstr2form.get('tx_i').value,
  //                    tx_s:this.gstr2form.get('tx_s').value,
  //                    tx_c:this.gstr2form.get('tx_c').value,
  //                  tx_cs:this.gstr2form.get('tx_cs').value,
  //                  }
  //                }
  //              ]
  //            }
  //          ]
  //        }
  //      ],
  //      b2bur:
  //      [
  //        {
  //          inv:
  //          [
  //            {
  //              chksum:this.gstr2form.get('chksum').value,
  //              inum:this.gstr2form.get('inum').value,
  //              idt:this.gstr2form.get('idt').value,
  //              val:this.gstr2form.get('val').value,
  //              pos:this.gstr2form.get('pos').value,
  //              sply_ty:this.gstr2form.get('sply_ty').value,
  //              itms:
  //              [
  //               {
  //                 num:this.gstr2form.get('num').value,
                  
  //                 itm_det:
  //                 {
  //                   rt:this.gstr2form.get('rt').value,
  //                   txval:this.gstr2form.get('txval').value,
  //                   iamt:this.gstr2form.get('iamt').value,
  //                   camt:this.gstr2form.get('camt').value,
  //                   samt:this.gstr2form.get('samt').value,
  //                   csamt:this.gstr2form.get('csamt').value,
  //                 },
  //                 itc:
  //                 {
                    
  //                   elg:this.gstr2form.get('elg').value,
  //                   tx_i:this.gstr2form.get('tx_i').value,
  //                   tx_s:this.gstr2form.get('tx_s').value,
  //                   tx_c:this.gstr2form.get('tx_c').value,
  //                   tx_cs:this.gstr2form.get('tx_cs').value,
  //                 }
  //               }
  //              ]
  //           }
  //         ]
  //       }
  //     ],
  //     cdn:
  //     [
  //       {
  //         ctin:this.gstr2form.get('ctin').value,
  //         nt:
  //         [
  //           {
  //             ntty:this.gstr2form.get('ntty').value,
  //             nt_num:this.gstr2form.get('nt_num').value,
  //             nt_dt:this.gstr2form.get('nt_dt').value,
  //             rsn:this.gstr2form.get('rsn').value,
  //             p_gst:this.gstr2form.get('p_gst').value,
  //             inum:this.gstr2form.get('inum').value,
  //             idt:this.gstr2form.get('idt').value,
  //             val:this.gstr2form.get('val').value,
  //             itms:
  //             [
  //               {
  //                 num:this.gstr2form.get('num').value,
  //                 itm_det:
  //                 {
  //                   rt:this.gstr2form.get('rt').value,
  //                   txval:this.gstr2form.get('txval').value,
  //                   iamt:this.gstr2form.get('iamt').value,
  //                   camt:this.gstr2form.get('camt').value,
  //                   samt:this.gstr2form.get('samt').value,
  //                   csamt:this.gstr2form.get('csamt').value,
  //                 },
  //                 itc:
  //                 {
  //                   elg:this.gstr2form.get('elg').value,
  //                   tx_i:this.gstr2form.get('tx_i').value,
  //                   tx_s:this.gstr2form.get('tx_s').value,
  //                   tx_c:this.gstr2form.get('tx_c').value,
  //                   tx_cs:this.gstr2form.get('tx_cs').value,
  //                 }
  //               }
  //              ]
  //           }
  //         ]
  //       }
  //     ],
  //     hsnsum:
  //     {
  //         det:
  //         [
  //           {
  //             num:this.gstr2form.get('num').value,
  //             hsn_sc:this.gstr2form.get('hsn_sc').value,
  //             desc:this.gstr2form.get('desc').value,
  //             uqc:this.gstr2form.get('uqc').value,
  //             qty:this.gstr2form.get('qty').value,
  //             val:this.gstr2form.get('val').value,
  //             txval:this.gstr2form.get('txval').value,
  //             iamt:this.gstr2form.get('iamt').value,
  //             camt:this.gstr2form.get('camt').value,
  //             samt:this.gstr2form.get('samt').value,
  //             csamt:this.gstr2form.get('csamt').value,
  //           }
  //         ]
        
  //       },
  //       imp_g:
  //       [
  //         {
  //           is_sez:this.gstr2form.get('is_sez').value,
  //           stin:this.gstr2form.get('stin').value,
  //           boe_num:this.gstr2form.get('boe_num').value,
  //           boe_dt:this.gstr2form.get('boe_dt').value,
  //           boe_val:this.gstr2form.get('boe_val').value,
  //           port_code:this.gstr2form.get('port_code').value,
  //           itms:
  //           [
  //             {
  //               num:this.gstr2form.get('num').value,
  //               txval:this.gstr2form.get('txval').value,
  //               rt:this.gstr2form.get('rt').value,
  //               iamt:this.gstr2form.get('iamt').value,
  //               csamt:this.gstr2form.get('csamt').value,
  //               tx_i:this.gstr2form.get('tx_i').value,
  //               tx_cs:this.gstr2form.get('tx_cs').value,
  //             }
  //           ]
  //         }
  //       ],
      
  //     imp_s:
  //     [
  //       {
  //         inum:this.gstr2form.get('inum').value,
  //         idt:this.gstr2form.get('idt').value,
  //         ival:this.gstr2form.get('ival').value,
  //         pos:this.gstr2form.get('pos').value,
  //         itms:
  //         [
  //           {
  //             num:this.gstr2form.get('num').value,
  //               txval:this.gstr2form.get('txval').value,
  //               rt:this.gstr2form.get('rt').value,
  //               iamt:this.gstr2form.get('iamt').value,
  //               csamt:this.gstr2form.get('csamt').value,
  //               tx_i:this.gstr2form.get('tx_i').value,
  //               tx_cs:this.gstr2form.get('tx_cs').value,
              
  //           }
  //         ]
  //       }
  //     ],
  //     nil_supplies:
  //     {
  //       inter:
  //       {
  //         cpddr:this.gstr2form.get('cpddr').value,
  //         exptdsply:this.gstr2form.get('exptdsply').value,
  //         ngsply:this.gstr2form.get('ngsply').value,
  //         nilsply:this.gstr2form.get('nilsply').value,
  //       },
  //       intra:
  //       {
  //         cpddr:this.gstr2form.get('cpddr').value,
  //         exptdsply:this.gstr2form.get('exptdsply').value,
  //         ngsply:this.gstr2form.get('ngsply').value,
  //         nilsply:this.gstr2form.get('nilsply').value,
  //       }
  //     },
  //     txi:
  //     [
  //       {
  //         pos:this.gstr2form.get('pos').value,
  //         sply_ty:this.gstr2form.get('sply_ty').value,
  //         itms:
  //         [
  //           {
  //             num:this.gstr2form.get('num').value,
  //             rt:this.gstr2form.get('rt').value,
  //             adamt:this.gstr2form.get('adamt').value,
  //             iamt:this.gstr2form.get('iamt').value,
  //             camt:this.gstr2form.get('camt').value,
  //             samt:this.gstr2form.get('samt').value,
  //             csamt:this.gstr2form.get('csamt').value,
  //           }
  //         ]
  //       }
  //     ],
  //     txpd:
  //     [
  //       {
  //         pos:this.gstr2form.get('pos').value,
  //         sply_ty:this.gstr2form.get('sply_ty').value,
  //         itms:
  //         [
  //           {
  //             num:this.gstr2form.get('num').value,
  //             rt:this.gstr2form.get('rt').value,
  //             adamt:this.gstr2form.get('adamt').value,
  //             iamt:this.gstr2form.get('iamt').value,
  //             camt:this.gstr2form.get('camt').value,
  //             samt:this.gstr2form.get('samt').value,
  //             csamt:this.gstr2form.get('csamt').value,
  //           }
  //         ]
  //       }
  //     ],
  //     itc_rvsl:
  //     {
  //       rule2_2:
  //       {
  //             iamt:this.gstr2form.get('iamt').value,
  //             camt:this.gstr2form.get('camt').value,
  //             samt:this.gstr2form.get('samt').value,
  //             csamt:this.gstr2form.get('csamt').value,
  //       },
  //       rule7_1_m:
  //       {
  //         iamt:this.gstr2form.get('iamt').value,
  //         camt:this.gstr2form.get('camt').value,
  //         samt:this.gstr2form.get('samt').value,
  //         csamt:this.gstr2form.get('csamt').value,
  //       },
  //       rule8_1_h:
  //       {
  //         iamt:this.gstr2form.get('iamt').value,
  //         camt:this.gstr2form.get('camt').value,
  //         samt:this.gstr2form.get('samt').value,
  //         csamt:this.gstr2form.get('csamt').value,
  //       },
  //       rule7_2_a:
  //       {
  //         iamt:this.gstr2form.get('iamt').value,
  //         camt:this.gstr2form.get('camt').value,
  //         samt:this.gstr2form.get('samt').value,
  //         csamt:this.gstr2form.get('csamt').value,
  //       },
  //       rule7_2_b:
  //       {
  //         iamt:this.gstr2form.get('iamt').value,
  //         camt:this.gstr2form.get('camt').value,
  //         samt:this.gstr2form.get('samt').value,
  //         csamt:this.gstr2form.get('csamt').value,
  //       },
  //       revitc:
  //       {
  //         iamt:this.gstr2form.get('iamt').value,
  //         camt:this.gstr2form.get('camt').value,
  //         samt:this.gstr2form.get('samt').value,
  //         csamt:this.gstr2form.get('csamt').value,
  //       },
  //       other:
  //       {
  //         iamt:this.gstr2form.get('iamt').value,
  //         camt:this.gstr2form.get('camt').value,
  //         samt:this.gstr2form.get('samt').value,
  //         csamt:this.gstr2form.get('csamt').value,
  //       }
  //     },
  //     cdnur:
  //     [
  //       {
  //         rtin:this.gstr2form.get('rtin').value,
  //         ntty:this.gstr2form.get('ntty').value,
  //         nt_num:this.gstr2form.get('nt_num').value,
  //         nt_dt:this.gstr2form.get('nt_dt').value,
  //         rsn:this.gstr2form.get('nt_dt').value,
  //         p_gst:this.gstr2form.get('nt_dt').value,
  //         inum:this.gstr2form.get('inum').value,
  //         idt:this.gstr2form.get('idt').value,
  //         val:this.gstr2form.get('val').value,
  //         inv_typ:this.gstr2form.get('inv_typ').value,
  //         itms:
  //         [
  //           {
  //             num:this.gstr2form.get('num').value,
  //             itm_det:
  //             {
  //               rt:this.gstr2form.get('rt').value,
  //               txval:this.gstr2form.get('txval').value,
  //               iamt:this.gstr2form.get('iamt').value,
  //               camt:this.gstr2form.get('camt').value,
  //               samt:this.gstr2form.get('samt').value,
  //               csamt:this.gstr2form.get('csamt').value,
  //             },
  //             itc:
  //             {
  //               elg:this.gstr2form.get('elg').value,
  //               tx_i:this.gstr2form.get('tx_i').value,
  //               tx_s:this.gstr2form.get('tx_s').value,
  //               tx_c:this.gstr2form.get('tx_c').value,
  //               tx_cs:this.gstr2form.get('tx_cs').value,
  //             }
  //           }
  //         ]
  //       }
  //     ],
  //     isd:
  //     [
  //       {
  //         ctin:this.gstr2form.get('gstin').value,
  //         doclist:
  //         [
  //           {
  //             chksum:this.gstr2form.get('chksum').value,
  //             isd_docty:this.gstr2form.get('isd_docty').value,
  //             docnum:this.gstr2form.get('isd_docty').value,
  //             docdt:this.gstr2form.get('docdt').value,
  //             itc_elg:this.gstr2form.get('itc_elg').value,
  //             tx_i:this.gstr2form.get('tx_i').value,
  //             tx_s:this.gstr2form.get('tx_s').value,
  //             tx_c:this.gstr2form.get('tx_c').value,
  //             tx_cs:this.gstr2form.get('tx_cs').value,

  //           }
  //         ]
  //       }
  //     ]
  //   }
  //   console.log('Gstr2object',Gstr2object);
  //   this.index.saveGstr2Invoice(Gstr2object).subscribe(response => {
  //    this.gstr2res = response;
  //     console.log(this.gstr2res);
  //     {
  //       swal(this.gstr2res.ref_id, "","success");
  //     }
      
  //   })
  // }


  departments = [
    { "id": 1, "name": "b2b" },
    { "id": 2, "name": "b2bur" },
    { "id": 3, "name": "cdn" },
    { "id": 4, "name": "hsnsum" },
    { "id": 5, "name": "nil_supplies" },
    { "id": 6, "name": "txpd" },
    { "id": 7, "name": "itc_rvsl" },
    { "id": 8, "name": "cdnur" },
    { "id": 9, "name": "isd" },
    { "id": 10, "name": "doclist" },
  ]

  onSelect(item) {
    this.router.navigate(['/dashboard2', item.id])
  }

  

// dashboard2(){
//   this.router.navigate(['/dashboard2'])
// }

   }
  