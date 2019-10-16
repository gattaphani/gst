import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { fullobject } from '../invoice';
import { IndexService } from 'src/app/index/services/index.service';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  getinvoice: any;
  gstinvoiceform: FormGroup;
  invoiceres: any;
  public departmentid;


  constructor(private DataService: DataService, private fb: FormBuilder, private dataservice: DataService,
    private sanitizer: DomSanitizer, private router: Router, private route: ActivatedRoute, private index: IndexService) {


  }
  backClicked() {
    this.router.navigate(['/gstr1']);
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
      "rchrg": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "etin": [null, Validators.required],
      "inv_typ": [null, Validators.required],
      "diff_percent": [null, Validators.required],

      "num": [null, Validators.required],
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






      "posb2ba": [null, Validators.required],
      "inumb2ba": [null, Validators.required],
      "idtb2ba": [null, Validators.required],
      "valb2ba": [null, Validators.required],
      "numb2ba": [null, Validators.required],
      "rtb2ba": [null, Validators.required],
      "txvalb2ba": [null, Validators.required],
      "iamtb2ba": [null, Validators.required],
      "camtb2ba": [null, Validators.required],
      "samtb2ba": [null, Validators.required],
      "csamtb2ba": [null, Validators.required],


      "posb2cl": [null, Validators.required],
      "inumb2cl": [null, Validators.required],
      "idtb2cl": [null, Validators.required],
      "valb2cl": [null, Validators.required],
      "numb2cl": [null, Validators.required],
      "rtb2cl": [null, Validators.required],
      "txvalb2cl": [null, Validators.required],
      "iamtb2cl": [null, Validators.required],
      "csamtb2cl": [null, Validators.required],

      "oinumb2cla": [null, Validators.required],
      "oidtab2cla": [null, Validators.required],
      "inumb2cla": [null, Validators.required],
      "idtb2cla": [null, Validators.required],
      "valb2cla": [null, Validators.required],
      "numb2cla": [null, Validators.required],
      "rtb2cla": [null, Validators.required],
      "txvalb2cla": [null, Validators.required],
      "iamtb2cla": [null, Validators.required],

      "nttycdnr": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "nt_numcdnr": [null, Validators.required],
      "nt_dtcdnr": [null, Validators.required],
      "p_gstcdnr": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "inumcdnr": [null, Validators.required],
      "valcdnr": [null, Validators.required],
      "numcdnr": [null, Validators.required],
      "rtcdnr": [null, Validators.required],
      "txvalcdnr": [null, Validators.required],
      "iamtcdnr": [null, Validators.required],
      "csamtcdnr": [null, Validators.required],


      "rtb2cs": [null, Validators.required],
      "sply_tyb2cs": [null, Validators.required],
      "txvalb2cs": [null, Validators.required],
      "iamtb2cs": [null, Validators.required],
      "csamtb2cs": [null, Validators.required],
      "posb2cs": [null, Validators.required],


      "omonb2csa": [null, Validators.required],
      "sply_tyb2csa": [null, Validators.required],
      "posb2csa": [null, Validators.required],
      "rtb2csa": [null, Validators.required],
      "txvalb2csa": [null, Validators.required],
      "iamtb2csa": [null, Validators.required],
      "camtb2csa": [null, Validators.required],
      "samtb2csa": [null, Validators.required],
      "csamtb2csa": [null, Validators.required],

      "sply_tynill": [null, Validators.required],
      "expt_amtnill": [null, Validators.required],
      "nil_amtnill": [null, Validators.required],
      "ngsup_amtnill": [null, Validators.required],

      "exp_typ1": [null, Validators.required],
      "inumexp": [null, Validators.required],
      "idtexp": [null, Validators.required],
      "valexp": [null, Validators.required],
      "sbpcode": [null, Validators.required],
      "sbnum": [null, Validators.required],
      "sbdt": [null, Validators.required],
      "rtexp": [null, Validators.required],
      "txvalexp": [null, Validators.required],
      "iamtexp": [null, Validators.required],
      "csamtexp": [null, Validators.required],


      "exp_typ2": [null, Validators.required],
      "inumexp2": [null, Validators.required],
      "idtexp2": [null, Validators.required],
      "valexp2": [null, Validators.required],
      "sbpcodeexp2": [null, Validators.required],
      "sbnumexp2": [null, Validators.required],
      "sbdtexp2": [null, Validators.required],
      "rtexp2": [null, Validators.required],
      "txvalexp2": [null, Validators.required],
      "iamtexp2": [null, Validators.required],
      "csamtexp2": [null, Validators.required],


      "exp_typexpa": [null, Validators.required],
      "oinumexpa": [null, Validators.required],
      "oidtexpa": [null, Validators.required],
      "inumexpa": [null, Validators.required],
      "valexpa": [null, Validators.required],
      "sbpcodeexpa": [null, Validators.required],
      "sbnumexpa": [null, Validators.required],
      "sbdtexpa": [null, Validators.required],
      "rtexpa": [null, Validators.required],
      "txvalexpa": [null, Validators.required],
      "iamtexpa": [null, Validators.required],
      "csamtexpa": [null, Validators.required],
      "idtexpa": [null, Validators.required],



      "postxpd": [null, Validators.required],
      "sply_tytxpd": [null, Validators.required],
      "diff_percenttxpd": [null, Validators.required],
      "rttxpd": [null, Validators.required],
      "ad_amttxpd": [null, Validators.required],
      "iamttxpd": [null, Validators.required],
      "csamttxpd": [null, Validators.required],


      "omontxpda": [null, Validators.required],
      "postxpda": [null, Validators.required],
      "sply_tytxpda": [null, Validators.required],
      "diff_percenttxpda": [null, Validators.required],
      "rttxpda": [null, Validators.required],
      "ad_amttxpda": [null, Validators.required],
      "iamttxpda": [null, Validators.required],
      "csamttxpda": [null, Validators.required],


      "doc_num": [null, Validators.required],
      "numdoc": [null, Validators.required],
      "from": [null, Validators.required],
      "to": [null, Validators.required],
      "totnum": [null, Validators.required],
      "cancel": [null, Validators.required],
      "net_issue": [null, Validators.required],


      "typcdnur": [null, Validators.required],
      "nttycdnur": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "nt_numcdnur": [null, Validators.required],
      "nt_dtcdnur": [null, Validators.required],
      "p_gstcdnur": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "inumtcdnur": [null, Validators.required],
      "idtcdnur": [null, Validators.required],
      "valcdnur": [null, Validators.required],
      "diff_percentcdnur": [null, Validators.required],

      "numcdnur": [null, Validators.required],
      "rtcdnur": [null, Validators.required],
      "txvalcdnur": [null, Validators.required],
      "iamtcdnur": [null, Validators.required],
      "csamtcdnur": [null, Validators.required],


      "ont_num": [null, Validators.required],
      "ont_dt": [null, Validators.required],
      "nt_numcdnura": [null, Validators.required],
      "nt_dtcdnura": [null, Validators.required],
      "nttycdnura": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "typcdnura": [null, Validators.required],
      "p_gst": [null, [Validators.required, Validators.pattern("^[a-zA-z]{1}")]],
      "inumcdnura": [null, Validators.required],
      "valcdnura": [null, Validators.required],
      "idtcdnura": [null, Validators.required],
      "diff_percentcdnura": [null, Validators.required],


      "numcdnura": [null, Validators.required],
      "rtcdnura": [null, Validators.required],
      "txvalcdnura": [null, Validators.required],
      "iamtcdnura": [null, Validators.required],
      "csamtcdnura": [null, Validators.required],


    });
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentid = id;
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


      // b2ba: [{
      //   ctin: this.gstinvoiceform.get('ctin').value,
      //   inv: [

      //     {

      //       oinum: this.gstinvoiceform.get('oinum').value,

      //       oidt: this.gstinvoiceform.get('oidt').value,

      //       inum: this.gstinvoiceform.get('inumb2ba').value,
      //       idt: this.gstinvoiceform.get('idtb2ba').value,
      //       val: this.gstinvoiceform.get('valb2ba').value,

      //       pos: this.gstinvoiceform.get('posb2ba').value,

      //       rchrg: this.gstinvoiceform.get('rchrg').value,

      //       etin: this.gstinvoiceform.get('etin').value,

      //       inv_typ: this.gstinvoiceform.get('inv_typ').value,

      //       diff_percent: this.gstinvoiceform.get('diff_percent').value,

      //       itms: [
      //         {
      //           num: this.gstinvoiceform.get('numb2ba').value,

      //           itm_det: {

      //             rt: this.gstinvoiceform.get('rtb2ba').value,

      //             txval: this.gstinvoiceform.get('txvalb2ba').value,

      //             iamt: this.gstinvoiceform.get('iamtb2ba').value,
      //             camt: this.gstinvoiceform.get('camtb2ba').value,
      //             samt: this.gstinvoiceform.get('samtb2ba').value,
      //             csamt: this.gstinvoiceform.get('csamtb2ba').value,


      //           }

      //         }

      //       ]

      //     }

      //   ]
      // }
      // ],


      // b2cl: [
      //   {
      //     pos: this.gstinvoiceform.get('posb2cl').value,
      //     inv: [
      //       {
      //         inum: this.gstinvoiceform.get('inumb2cl').value,
      //         idt: this.gstinvoiceform.get('idtb2cl').value,
      //         val: this.gstinvoiceform.get('valb2cl').value,
      //         inv_typ: this.gstinvoiceform.get('inv_typ').value,
      //         etin: this.gstinvoiceform.get('etin').value,
      //         diff_percent: this.gstinvoiceform.get('diff_percent').value,
      //         itms: [
      //           {
      //             num: this.gstinvoiceform.get('numb2cl').value,
      //             itm_det:
      //             {
      //               rt: this.gstinvoiceform.get('rtb2cl').value,
      //               txval: this.gstinvoiceform.get('txvalb2cl').value,
      //               iamt: this.gstinvoiceform.get('iamtb2cl').value,
      //               csamt: this.gstinvoiceform.get('csamtb2cl').value,
      //             }

      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],


      // b2cla: [
      //   {
      //     pos: this.gstinvoiceform.get('pos').value,
      //     inv: [
      //       {
      //         oinum: this.gstinvoiceform.get('oinumb2cla').value,
      //         oidt: this.gstinvoiceform.get('oidtab2cla').value,
      //         inv_typ: this.gstinvoiceform.get('inv_typ').value,
      //         diff_percent: this.gstinvoiceform.get('diff_percent').value,
      //         inum: this.gstinvoiceform.get('inumb2cla').value,
      //         idt: this.gstinvoiceform.get('idt').value,
      //         val: this.gstinvoiceform.get('val').value,
      //         etin: this.gstinvoiceform.get('val').value,
      //         itms: [
      //           {
      //             num: this.gstinvoiceform.get('num').value,
      //             itm_det:
      //             {
      //               rt: this.gstinvoiceform.get('rt').value,
      //               txval: this.gstinvoiceform.get('txval').value,
      //               iamt: this.gstinvoiceform.get('txval').value,
      //             }
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],

      // cdnr: [
      //   {
      //     ctin: this.gstinvoiceform.get('ctin').value,
      //     nt: [
      //       {
      //         ntty: this.gstinvoiceform.get('nttycdnr').value,
      //         nt_num: this.gstinvoiceform.get('nt_numcdnr').value,
      //         nt_dt: this.gstinvoiceform.get('nt_dtcdnr').value,
      //         p_gst: this.gstinvoiceform.get('p_gstcdnr').value,
      //         inum: this.gstinvoiceform.get('inumcdnr').value,
      //         idt: this.gstinvoiceform.get('idt').value,
      //         val: this.gstinvoiceform.get('valcdnr').value,
      //         diff_percent: this.gstinvoiceform.get('diff_percent').value,
      //         itms: [
      //           {
      //             num: this.gstinvoiceform.get('numcdnr').value,
      //             itm_det:
      //             {
      //               rt: this.gstinvoiceform.get('rtcdnr').value,
      //               txval: this.gstinvoiceform.get('txvalcdnr').value,
      //               iamt: this.gstinvoiceform.get('iamtcdnr').value,
      //               csamt: this.gstinvoiceform.get('csamtcdnr').value
      //             }
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],

      // b2cs: [
      //   {
      //     rt: this.gstinvoiceform.get('rtb2cs').value,
      //     sply_ty: this.gstinvoiceform.get('sply_tyb2cs').value,
      //     diff_percent: this.gstinvoiceform.get('diff_percent').value,

      //     typ: this.gstinvoiceform.get('typ').value,
      //     etin: this.gstinvoiceform.get('etin').value,

      //     txval: this.gstinvoiceform.get('txvalb2cs').value,
      //     iamt: this.gstinvoiceform.get('iamtb2cs').value,
      //     csamt: this.gstinvoiceform.get('csamtb2cs').value,
      //     pos: this.gstinvoiceform.get('posb2cs').value,
      //   }
      //   // {
      //   //   rt:this.gstinvoiceform.get('rt').value,
      //   //   sply_ty:this.gstinvoiceform.get('sply_ty').value,
      //   //   diff_percent:this.gstinvoiceform.get('diff_percent').value,
      //   //   typ:this.gstinvoiceform.get('typ').value,
      //   //   etin:this.gstinvoiceform.get('etin').value,
      //   //   txval:this.gstinvoiceform.get('txval').value,
      //   //   iamt:this.gstinvoiceform.get('iamt').value,
      //   //   csamt:this.gstinvoiceform.get('csamt').value,
      //   //   pos:this.gstinvoiceform.get('pos').value,
      //   // }
      // ],


      // b2csa: [
      //   {
      //     omon: this.gstinvoiceform.get('omonb2csa').value,
      //     sply_ty: this.gstinvoiceform.get('sply_tyb2csa').value,
      //     diff_percent: this.gstinvoiceform.get('diff_percent').value,
      //     typ: this.gstinvoiceform.get('typ').value,
      //     etin: this.gstinvoiceform.get('etin').value,
      //     pos: this.gstinvoiceform.get('posb2csa').value,
      //     itms: [
      //       {
      //         rt: this.gstinvoiceform.get('rtb2csa').value,
      //         txval: this.gstinvoiceform.get('txvalb2csa').value,
      //         iamt: this.gstinvoiceform.get('iamtb2csa').value,
      //         camt: this.gstinvoiceform.get('camtb2csa').value,
      //         samt: this.gstinvoiceform.get('samtb2csa').value,
      //         csamt: this.gstinvoiceform.get('csamtb2csa').value,
      //       }
      //       // {
      //       //   rt:this.gstinvoiceform.get('rt').value,
      //       //   txval:this.gstinvoiceform.get('txval').value,
      //       //   iamt:this.gstinvoiceform.get('iamt').value,
      //       //   camt:this.gstinvoiceform.get('camt').value,
      //       //   samt:this.gstinvoiceform.get('samt').value,
      //       //   csamt:this.gstinvoiceform.get('csamt').value,
      //       // }
      //     ]
      //   }
      // ],



      // exp: [
      //   {
      //     exp_typ: this.gstinvoiceform.get('exp_typ1').value,
      //     inv: [
      //       {
      //         inum: this.gstinvoiceform.get('inumexp').value,
      //         idt: this.gstinvoiceform.get('idtexp').value,
      //         val: this.gstinvoiceform.get('valexp').value,
      //         diff_percent: this.gstinvoiceform.get('diff_percent').value,
      //         sbpcode: this.gstinvoiceform.get('sbpcode').value,
      //         sbnum: this.gstinvoiceform.get('sbnum').value,
      //         sbdt: this.gstinvoiceform.get('sbdt').value,
      //         itms: [
      //           {

      //             rt: this.gstinvoiceform.get('rtexp').value,
      //             txval: this.gstinvoiceform.get('txvalexp').value,
      //             iamt: this.gstinvoiceform.get('iamtexp').value,
      //             csamt: this.gstinvoiceform.get('csamtexp').value,
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],

      // expa: [
      //   {
      //     exp_typ: this.gstinvoiceform.get('exp_typexpa').value,
      //     inv: [
      //       {
      //         oinum: this.gstinvoiceform.get('oinumexpa').value,
      //         oidt: this.gstinvoiceform.get('oidtexpa').value,
      //         inum: this.gstinvoiceform.get('inumexpa').value,
      //         idt: this.gstinvoiceform.get('idtexpa').value,
      //         val: this.gstinvoiceform.get('valexpa').value,
      //         diff_percent: this.gstinvoiceform.get('diff_percent').value,
      //         sbpcode: this.gstinvoiceform.get('sbpcodeexpa').value,
      //         sbnum: this.gstinvoiceform.get('sbnumexpa').value,
      //         sbdt: this.gstinvoiceform.get('sbdtexpa').value,
      //         itms: [
      //           {

      //             rt: this.gstinvoiceform.get('rtexpa').value,
      //             txval: this.gstinvoiceform.get('txvalexpa').value,
      //             iamt: this.gstinvoiceform.get('iamtexpa').value,
      //             csamt: this.gstinvoiceform.get('csamtexpa').value,
      //           }
      //         ]
      //       }
      //     ]
      //   }
      // ],

      // nil:
      // {
      //   inv: [
      //     {
      //       sply_ty: this.gstinvoiceform.get('sply_tynill').value,
      //       expt_amt: this.gstinvoiceform.get('expt_amtnill').value,
      //       nil_amt: this.gstinvoiceform.get('nil_amtnill').value,
      //       ngsup_amt: this.gstinvoiceform.get('ngsup_amtnill').value,
      //     }
      //     // {
      //     //   sply_ty:this.gstinvoiceform.get('sply_ty').value,
      //     //   expt_amt:this.gstinvoiceform.get('expt_amt').value,
      //     //   nil_amt:this.gstinvoiceform.get('nil_amt').value,
      //     //   ngsup_amt:this.gstinvoiceform.get('ngsup_amt').value,
      //     // }
      //   ]
      // },

      // txpd: [
      //   {
      //     pos: this.gstinvoiceform.get("postxpd").value,
      //     sply_ty: this.gstinvoiceform.get("sply_tytxpd").value,
      //     diff_percent: this.gstinvoiceform.get("diff_percenttxpd").value,
      //     itms: [
      //       {
      //         rt: this.gstinvoiceform.get("rttxpd").value,
      //         ad_amt: this.gstinvoiceform.get("ad_amttxpd").value,
      //         iamt: this.gstinvoiceform.get("iamttxpd").value,
      //         csamt: this.gstinvoiceform.get("csamttxpd").value,
      //       }
      //     ]
      //   }
      // ],
      // txpda: [
      //   {
      //     omon: this.gstinvoiceform.get("omontxpda").value,
      //     pos: this.gstinvoiceform.get("postxpda").value,
      //     sply_ty: this.gstinvoiceform.get("sply_tytxpda").value,
      //     diff_percent: this.gstinvoiceform.get("diff_percenttxpda").value,
      //     itms: [
      //       {
      //         rt: this.gstinvoiceform.get("rttxpda").value,
      //         ad_amt: this.gstinvoiceform.get("ad_amttxpda").value,
      //         iamt: this.gstinvoiceform.get("iamttxpda").value,
      //         csamt: this.gstinvoiceform.get("csamttxpd").value,
      //       }
      //     ]
      //   }
      // ],
      // doc_issue:
      // {
      //   doc_det:
      //     [
      //       {
      //         doc_num: this.gstinvoiceform.get("doc_num").value,
      //         docs:
      //           [
      //             {
      //               num: this.gstinvoiceform.get("numdoc").value,
      //               from: this.gstinvoiceform.get("from").value,
      //               to: this.gstinvoiceform.get("to").value,
      //               totnum: this.gstinvoiceform.get("totnum").value,
      //               cancel: this.gstinvoiceform.get("cancel").value,
      //               net_issue: this.gstinvoiceform.get("net_issue").value,
      //             }
      //           ]
      //       }
      //     ]
      // },
      // cdnur:
      //   [
      //     {
      //       typ: this.gstinvoiceform.get("typcdnur").value,
      //       ntty: this.gstinvoiceform.get("nttycdnur").value,
      //       nt_num: this.gstinvoiceform.get("nt_numcdnur").value,
      //       nt_dt: this.gstinvoiceform.get("nt_dtcdnur").value,
      //       p_gst: this.gstinvoiceform.get("p_gstcdnur").value,
      //       inum: this.gstinvoiceform.get("inumtcdnur").value,
      //       idt: this.gstinvoiceform.get("idtcdnur").value,
      //       val: this.gstinvoiceform.get("valcdnur").value,
      //       diff_percent: this.gstinvoiceform.get("diff_percentcdnur").value,
      //       itms:
      //         [
      //           {
      //             num: this.gstinvoiceform.get('numcdnur').value,
      //             itm_det:
      //             {
      //               rt: this.gstinvoiceform.get('rtcdnur').value,
      //               txval: this.gstinvoiceform.get('txvalcdnur').value,
      //               iamt: this.gstinvoiceform.get('iamtcdnur').value,
      //               csamt: this.gstinvoiceform.get('csamtcdnur').value
      //             }
      //           }
      //         ]
      //     }
      //   ],
      // cdnura:
      //   [
      //     {
      //       ont_num: this.gstinvoiceform.get("ont_num").value,
      //       ont_dt: this.gstinvoiceform.get("ont_dt").value,
      //       nt_num: this.gstinvoiceform.get("nt_numcdnura").value,
      //       nt_dt: this.gstinvoiceform.get("nt_dtcdnura").value,
      //       ntty: this.gstinvoiceform.get("nttycdnura").value,
      //       typ: this.gstinvoiceform.get("typcdnura").value,
      //       p_gst: this.gstinvoiceform.get("p_gst").value,
      //       inum: this.gstinvoiceform.get("inumcdnura").value,
      //       val: this.gstinvoiceform.get("valcdnura").value,
      //       idt: this.gstinvoiceform.get("idtcdnura").value,
      //       diff_percent: this.gstinvoiceform.get("diff_percentcdnura").value,
      //       itms:
      //         [
      //           {
      //             num: this.gstinvoiceform.get('numcdnura').value,
      //             itm_det:
      //             {
      //               rt: this.gstinvoiceform.get('rtcdnura').value,
      //               txval: this.gstinvoiceform.get('txvalcdnura').value,
      //               iamt: this.gstinvoiceform.get('iamtcdnura').value,
      //               csamt: this.gstinvoiceform.get('csamtcdnura').value
      //             }
      //           }
      //         ]
      //     }
      //   ]


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