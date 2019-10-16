import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/index/services/index.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
//import { gstr2object } from './gstr2';
import { DataService } from 'src/app/services/data.service';
import { gstr2object } from '../gstr2/gstr2';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {

  gstr2res: any;
  gstr2form:FormGroup;
  departmentid: number;
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


      // b2bur

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


     //cdn
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

     //hsnsum
     "numhsnsum": [null, Validators.required],
     "hsn_schsnsum": [null, Validators.required],
     "deschsnsum": [null, Validators.required],
     "uqchsnsum": [null, Validators.required],
     "qtyhsnsum": [null, Validators.required],
     "valhsnsum": [null, Validators.required],
     "txvalhsnsum": [null, Validators.required],
     "iamthsnsum": [null, Validators.required],
     "camthsnsum": [null, Validators.required],
     "samthsnsum": [null, Validators.required],
     "csamthsnsum": [null, Validators.required],
     "is_sezhsnsum": [null, Validators.required],
     "stinhsnsum": [null, Validators.required],
     "boe_numhsnsum": [null, Validators.required],
     "boe_dthsnsum": [null, Validators.required],
     "boe_valhsnsum": [null, Validators.required],
     "port_codehsnsum": [null, Validators.required],
     
     "numhsnsumimp": [null, Validators.required],
     "txvalhsnsumimp": [null, Validators.required],
     "rthsnsum": [null, Validators.required],
     "iamthsnsumimp": [null, Validators.required],
     "csamthsnsumimp": [null, Validators.required],
     "elghsnsum": [null, Validators.required],
     "tx_ihsnsum": [null, Validators.required],
     "tx_cshsnsum": [null, Validators.required],
     "inumhsnsum": [null, Validators.required],
     "idthsnsum": [null, Validators.required],
     "ivalhsnsum": [null, Validators.required],
     "poshsnsum": [null, Validators.required],
     "numhsnsumit": [null, Validators.required],
     "txvalhsnsumit": [null, Validators.required],
     "elghsnsumit": [null, Validators.required],
     "rthsnsumit": [null, Validators.required],
     "iamthsnsumit": [null, Validators.required],
     "csamthsnsumit": [null, Validators.required],
     "tx_ihsnsumit": [null, Validators.required],
     "tx_cshsnsumit": [null, Validators.required],



    //nil_supplies
     "cpddr": [null, Validators.required],
     "exptdsply": [null, Validators.required],
     "ngsply": [null, Validators.required],
     "nilsply": [null, Validators.required],
     "cpddrnil": [null, Validators.required],
     "exptdsplynil": [null, Validators.required],    
     "ngsplynil": [null, Validators.required],  
     "nilsplynil": [null, Validators.required],
     "postxi": [null, Validators.required],
     "sply_tytxi": [null, Validators.required],
     "numnil": [null, Validators.required],
     "rtnil": [null, Validators.required],
     "adamtnil": [null, Validators.required],
     "iamtnil": [null, Validators.required],
     "camtnil": [null, Validators.required],
     "samtnil": [null, Validators.required],
     "csamtnil": [null, Validators.required],

     //txpd
     "postxpd": [null, Validators.required],
     "sply_tytxpd": [null, Validators.required],
     "numtxpd": [null, Validators.required],
     "rttxpd": [null, Validators.required],
     "adamttxpd": [null, Validators.required],
     "iamttxpd": [null, Validators.required],
     "camttxpd": [null, Validators.required],
     "samttxpd": [null, Validators.required],
     "csamttxpd": [null, Validators.required],

     //itc_rvsl
     "iamtitc": [null, Validators.required],
     "camtitc": [null, Validators.required],
     "samtitc": [null, Validators.required],
     "csamtitc": [null, Validators.required],

     "iamt71m": [null, Validators.required],
     "camt71m": [null, Validators.required],
     "samt71m": [null, Validators.required],
     "csamt71m": [null, Validators.required],

     "iamt81h": [null, Validators.required],
     "camt81h": [null, Validators.required],
     "samt81h": [null, Validators.required],
     "csamt81h": [null, Validators.required],


     "iamt72a": [null, Validators.required],
     "camt72a": [null, Validators.required],
     "samt72a": [null, Validators.required],
     "csamt72a": [null, Validators.required],


     "iamt72b": [null, Validators.required],
     "camt72b": [null, Validators.required],
     "samt72b": [null, Validators.required],
     "csamt72b": [null, Validators.required],

      //revitc
      "iamtrev": [null, Validators.required],
      "camtrev": [null, Validators.required],
      "samtrev": [null, Validators.required],
      "csamtrev": [null, Validators.required],
      "iamtother": [null, Validators.required],
      "camtother": [null, Validators.required],
      "samtother": [null, Validators.required],
      "csamtother": [null, Validators.required],


      //cdnur
      "rtincdnur": [null, Validators.required],
      "nttycdnur": [null, Validators.required],
      "nt_numcdnur": [null, Validators.required],
      "nt_dtcdnur": [null, Validators.required],
      "rsncdnur": [null, Validators.required],
      "p_gstcdnur": [null, Validators.required],
      "inumcdnur": [null, Validators.required],
      "idtcdnur": [null, Validators.required],
      "valcdnur": [null, Validators.required],
      "inv_typcdnur": [null, Validators.required],
      "numcdnur": [null, Validators.required],
      "rtcdnur": [null, Validators.required],
      "txvalcdnur": [null, Validators.required],
      "iamtcdnur": [null, Validators.required],
      "camtcdnur": [null, Validators.required],
      "samtcdnur": [null, Validators.required],
      "csamtcdnur": [null, Validators.required],
      "elgcdnur": [null, Validators.required],
      "tx_icdnur": [null, Validators.required],
      "tx_scdnur": [null, Validators.required],
      "tx_ccdnur": [null, Validators.required],
      "tx_cscdnur": [null, Validators.required],


      //isd
      "ctinisd": [null, Validators.required],

      //doclist
      "chksumdoc": [null, Validators.required],
      "isd_doctydoc": [null, Validators.required],
      "docnumdoc": [null, Validators.required],
      "docdtdoc": [null, Validators.required],
      "itc_elgdoc": [null, Validators.required],
      "tx_idoc": [null, Validators.required],
      "tx_sdoc": [null, Validators.required],
      "tx_cdoc": [null, Validators.required],
      "tx_csdoc": [null, Validators.required],







     
    });
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentid = id;
    console.log('departmentid',this.departmentid)
  }

  

  savegstr2obj()
  {
    debugger;
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
                   itc:
                   {
                    
                     elg:this.gstr2form.get('elg').value,
                     tx_i:this.gstr2form.get('tx_i').value,
                     tx_s:this.gstr2form.get('tx_s').value,
                     tx_c:this.gstr2form.get('tx_c').value,
                     tx_cs:this.gstr2form.get('tx_cs').value,
                   }
                 }
               ]
             },
             {
               flag:this.gstr2form.get('flag').value,
               chksum:this.gstr2form.get('chksum').value,
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
                   itc:
                   {
                  
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
       b2bur:
       [
         {
           inv:
           [
             {
               chksum:this.gstr2form.get('chksumb2bur').value,
               inum:this.gstr2form.get('inumb2bur').value,
               idt:this.gstr2form.get('idtb2bur').value,
               val:this.gstr2form.get('valb2bur').value,
               pos:this.gstr2form.get('posb2bur').value,
               sply_ty:this.gstr2form.get('sply_tyb2bur').value,
               itms:
               [
                {
                  num:this.gstr2form.get('numb2bur').value,
                  
                  itm_det:
                  {
                    rt:this.gstr2form.get('rtb2bur').value,
                    txval:this.gstr2form.get('txvalb2bur').value,
                    iamt:this.gstr2form.get('iamtb2bur').value,
                    camt:this.gstr2form.get('camtb2bur').value,
                    samt:this.gstr2form.get('samtb2bur').value,
                    csamt:this.gstr2form.get('csamtb2bur').value,
                  },
                  itc:
                  {
                    
                    elg:this.gstr2form.get('elgb2bur').value,
                    tx_i:this.gstr2form.get('tx_ib2bur').value,
                    tx_s:this.gstr2form.get('tx_sb2bur').value,
                    tx_c:this.gstr2form.get('tx_cb2bur').value,
                    tx_cs:this.gstr2form.get('tx_csb2bur').value,
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
          ctin:this.gstr2form.get('ctincdn').value,
          nt:
          [
            {
              ntty:this.gstr2form.get('nttycdn').value,
              nt_num:this.gstr2form.get('nt_numcdn').value,
              nt_dt:this.gstr2form.get('nt_dtcdn').value,
              rsn:this.gstr2form.get('rsncdn').value,
              p_gst:this.gstr2form.get('p_gstcdn').value,
              inum:this.gstr2form.get('inumcdn').value,
              idt:this.gstr2form.get('idtcdn').value,
              val:this.gstr2form.get('valcdn').value,
              itms:
              [
                {
                  num:this.gstr2form.get('numcdn').value,
                  itm_det:
                  {
                    rt:this.gstr2form.get('rtcdn').value,
                    txval:this.gstr2form.get('txvalcdn').value,
                    iamt:this.gstr2form.get('iamtcdn').value,
                    camt:this.gstr2form.get('camtcdn').value,
                    samt:this.gstr2form.get('samtcdn').value,
                    csamt:this.gstr2form.get('csamtcdn').value,
                  },
                  itc:
                  {
                    elg:this.gstr2form.get('elgcdn').value,
                    tx_i:this.gstr2form.get('tx_icdn').value,
                    tx_s:this.gstr2form.get('tx_scdn').value,
                    tx_c:this.gstr2form.get('tx_ccdn').value,
                    tx_cs:this.gstr2form.get('tx_cscdn').value,
                  }
                }
               ]
            }
          ]
        }
      ],
      hsnsum:
      {
          det:
          [
            {
              num:this.gstr2form.get('numhsnsum').value,
              hsn_sc:this.gstr2form.get('hsn_schsnsum').value,
              desc:this.gstr2form.get('deschsnsum').value,
              uqc:this.gstr2form.get('uqchsnsum').value,
              qty:this.gstr2form.get('qtyhsnsum').value,
              val:this.gstr2form.get('valhsnsum').value,
              txval:this.gstr2form.get('txvalhsnsum').value,
              iamt:this.gstr2form.get('iamthsnsum').value,
              camt:this.gstr2form.get('camthsnsum').value,
              samt:this.gstr2form.get('samthsnsum').value,
              csamt:this.gstr2form.get('csamthsnsum').value,
            }
          ]
        
        },
        imp_g:
        [
          {
            is_sez:this.gstr2form.get('is_sezhsnsum').value,
            stin:this.gstr2form.get('stinhsnsum').value,
            boe_num:this.gstr2form.get('boe_numhsnsum').value,
            boe_dt:this.gstr2form.get('boe_dthsnsum').value,
            boe_val:this.gstr2form.get('boe_valhsnsum').value,
            port_code:this.gstr2form.get('port_codehsnsum').value,
            itms:
            [
              {
                num:this.gstr2form.get('numhsnsumimp').value,
                txval:this.gstr2form.get('txvalhsnsumimp').value,
                rt:this.gstr2form.get('rthsnsumimp').value,
                iamt:this.gstr2form.get('iamthsnsumimp').value,
                csamt:this.gstr2form.get('csamthsnsumimp').value,
                tx_i:this.gstr2form.get('tx_ihsnsumimp').value,
                tx_cs:this.gstr2form.get('tx_cshsnsumimp').value,
              }
            ]
          }
        ],
      
      imp_s:
      [
        {
          inum:this.gstr2form.get('inumhsnsum').value,
          idt:this.gstr2form.get('idthsnsum').value,
          ival:this.gstr2form.get('ivalhsnsum').value,
          pos:this.gstr2form.get('poshsnsum').value,
          itms:
          [
            {
              num:this.gstr2form.get('numhsnsumit').value,
                txval:this.gstr2form.get('txvalhsnsumit').value,
                rt:this.gstr2form.get('rthsnsumit').value,
                iamt:this.gstr2form.get('iamthsnsumit').value,
                csamt:this.gstr2form.get('csamthsnsumit').value,
                tx_i:this.gstr2form.get('tx_ihsnsumit').value,
                tx_cs:this.gstr2form.get('tx_cshsnsumit').value,
              
            }
          ]
        }
      ],
      nil_supplies:
      {
        inter:
        {
          cpddr:this.gstr2form.get('cpddr').value,
          exptdsply:this.gstr2form.get('exptdsply').value,
          ngsply:this.gstr2form.get('ngsply').value,
          nilsply:this.gstr2form.get('nilsply').value,
        },
        intra:
        {
          cpddr:this.gstr2form.get('cpddrnil').value,
          exptdsply:this.gstr2form.get('exptdsplynil').value,
          ngsply:this.gstr2form.get('ngsplynil').value,
          nilsply:this.gstr2form.get('nilsplynil').value,
        }
      },
      txi:
      [
        {
          pos:this.gstr2form.get('postxi').value,
          sply_ty:this.gstr2form.get('sply_tytxi').value,
          itms:
          [
            {
              num:this.gstr2form.get('numnil').value,
              rt:this.gstr2form.get('rtnil').value,
              adamt:this.gstr2form.get('adamtnil').value,
              iamt:this.gstr2form.get('iamtnil').value,
              camt:this.gstr2form.get('camtnil').value,
              samt:this.gstr2form.get('samtnil').value,
              csamt:this.gstr2form.get('csamtnil').value,
            }
          ]
        }
      ],
      txpd:
      [
        {
          pos:this.gstr2form.get('postxpd').value,
          sply_ty:this.gstr2form.get('sply_ty').value,
          itms:
          [
            {
              num:this.gstr2form.get('num').value,
              rt:this.gstr2form.get('rt').value,
              adamt:this.gstr2form.get('adamt').value,
              iamt:this.gstr2form.get('iamt').value,
              camt:this.gstr2form.get('camt').value,
              samt:this.gstr2form.get('samt').value,
              csamt:this.gstr2form.get('csamt').value,
            }
          ]
        }
      ],
      itc_rvsl:
      {
        rule2_2:
        {
              iamt:this.gstr2form.get('iamt').value,
              camt:this.gstr2form.get('camt').value,
              samt:this.gstr2form.get('samt').value,
              csamt:this.gstr2form.get('csamt').value,
        },
        rule7_1_m:
        {
          iamt:this.gstr2form.get('iamt').value,
          camt:this.gstr2form.get('camt').value,
          samt:this.gstr2form.get('samt').value,
          csamt:this.gstr2form.get('csamt').value,
        },
        rule8_1_h:
        {
          iamt:this.gstr2form.get('iamt').value,
          camt:this.gstr2form.get('camt').value,
          samt:this.gstr2form.get('samt').value,
          csamt:this.gstr2form.get('csamt').value,
        },
        rule7_2_a:
        {
          iamt:this.gstr2form.get('iamt').value,
          camt:this.gstr2form.get('camt').value,
          samt:this.gstr2form.get('samt').value,
          csamt:this.gstr2form.get('csamt').value,
        },
        rule7_2_b:
        {
          iamt:this.gstr2form.get('iamt').value,
          camt:this.gstr2form.get('camt').value,
          samt:this.gstr2form.get('samt').value,
          csamt:this.gstr2form.get('csamt').value,
        },
        revitc:
        {
          iamt:this.gstr2form.get('iamt').value,
          camt:this.gstr2form.get('camt').value,
          samt:this.gstr2form.get('samt').value,
          csamt:this.gstr2form.get('csamt').value,
        },
        other:
        {
          iamt:this.gstr2form.get('iamt').value,
          camt:this.gstr2form.get('camt').value,
          samt:this.gstr2form.get('samt').value,
          csamt:this.gstr2form.get('csamt').value,
        }
      },
      cdnur:
      [
        {
          rtin:this.gstr2form.get('rtin').value,
          ntty:this.gstr2form.get('ntty').value,
          nt_num:this.gstr2form.get('nt_num').value,
          nt_dt:this.gstr2form.get('nt_dt').value,
          rsn:this.gstr2form.get('nt_dt').value,
          p_gst:this.gstr2form.get('nt_dt').value,
          inum:this.gstr2form.get('inum').value,
          idt:this.gstr2form.get('idt').value,
          val:this.gstr2form.get('val').value,
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
              itc:
              {
                elg:this.gstr2form.get('elg').value,
                tx_i:this.gstr2form.get('tx_i').value,
                tx_s:this.gstr2form.get('tx_s').value,
                tx_c:this.gstr2form.get('tx_c').value,
                tx_cs:this.gstr2form.get('tx_cs').value,
              }
            }
          ]
        }
      ],
      isd:
      [
        {
          ctin:this.gstr2form.get('gstin').value,
          doclist:
          [
            {
              chksum:this.gstr2form.get('chksum').value,
              isd_docty:this.gstr2form.get('isd_docty').value,
              docnum:this.gstr2form.get('isd_docty').value,
              docdt:this.gstr2form.get('docdt').value,
              itc_elg:this.gstr2form.get('itc_elg').value,
              tx_i:this.gstr2form.get('tx_i').value,
              tx_s:this.gstr2form.get('tx_s').value,
              tx_c:this.gstr2form.get('tx_c').value,
              tx_cs:this.gstr2form.get('tx_cs').value,

            }
          ]
        }
      ]
    }
    console.log('Gstr2object',Gstr2object);
    this.index.saveGstr2Invoice(Gstr2object).subscribe(response => {
     this.gstr2res = response;
      console.log(this.gstr2res);
      {
        swal(this.gstr2res.ref_id, "","success");
      }
      
    })
  }

  backClicked() {
    this.router.navigate(['/gstr2']);
  }
  }


