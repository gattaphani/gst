import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { gstr3bobject} from '../../../../src/app/home/gstr3b/gstr3b';
import { IndexService } from 'src/app/index/services/index.service';


@Component({
  selector: 'app-gstr3b1form',
  templateUrl: './gstr3b1form.component.html',
  styleUrls: ['./gstr3b1form.component.scss']
})
export class Gstr3b1formComponent implements OnInit {

  gstr3bform:FormGroup;
  gstr3bres:any;

  constructor( private fb: FormBuilder, private data: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }

  ngOnInit() {
    {
      this.gstr3bform = this.fb.group({
        "gstin": [null, Validators.required],
        "ret_period": [null, Validators.required],

        
        "txvalout": [null, Validators.required],
        "iamtout": [null, Validators.required],
        "camtout": [null, Validators.required],
        "samtout": [null, Validators.required],
        "csamtout": [null, Validators.required],

        "txvalzr": [null, Validators.required],
        "iamtzr": [null, Validators.required],
        "csamtzr": [null, Validators.required],

        "txvalnil": [null, Validators.required],
       

        "txvalrchrg": [null, Validators.required],
        "iamtrchrg": [null, Validators.required],
        "camtrchrg": [null, Validators.required],
        "samtrchrg": [null, Validators.required],
        "csamtrchrg": [null, Validators.required],

        "txvalnon": [null, Validators.required],
        
        "posunr":[null, Validators.required],
        "txvalunr": [null, Validators.required],
        "iamtunr": [null, Validators.required],

        // "posunr":[null, Validators.required],
        // "txvalunr": [null, Validators.required],
        // "iamtunr": [null, Validators.required],

        // "posunr":[null, Validators.required],
        // "txvalunr": [null, Validators.required],
        // "iamtunr": [null, Validators.required],

        "postax":[null, Validators.required],
        "txvaltax": [null, Validators.required],
        "iamttax": [null, Validators.required],
       
        // "postax":[null, Validators.required],
        // "txvaltax": [null, Validators.required],
        // "iamttax": [null, Validators.required],

        // "postax":[null, Validators.required],
        // "txvaltax": [null, Validators.required],
        // "iamttax": [null, Validators.required],

        "posuin":[null, Validators.required],
        "txvaluin": [null, Validators.required],
        "iamtuin": [null, Validators.required],

        // "posuin":[null, Validators.required],
        // "txvaluin": [null, Validators.required],
        // "iamtuin": [null, Validators.required],

        // "posuin":[null, Validators.required],
        // "txvaluin": [null, Validators.required],
        // "iamtuin": [null, Validators.required],


       


      


      });
    }
  }


savegst3bobj(){
    let Gstr3bobject:gstr3bobject = 
    {
      gstin:this.gstr3bform.get('gstin').value,
      ret_period:this.gstr3bform.get('ret_period').value,
      sup_details:
      {
        osup_det:
        {
          txval:this.gstr3bform.get('txvalout').value,
          iamt:this.gstr3bform.get('iamtout').value,
          camt:this.gstr3bform.get('camtout').value,
          samt:this.gstr3bform.get('samtout').value,
          csamt:this.gstr3bform.get('csamtout').value,

        },
        osup_zero:
        {
          txval:this.gstr3bform.get('txvalzr').value,
          iamt:this.gstr3bform.get('iamtzr').value,
          csamt:this.gstr3bform.get('csamtzr').value,
        },
        osup_nil_exmp:
        {
          txval:this.gstr3bform.get('txvalnil').value,
        },
        isup_rev:
        {
          txval:this.gstr3bform.get('txvalrchrg').value,
          iamt:this.gstr3bform.get('iamtrchrg').value,
          camt:this.gstr3bform.get('camtrchrg').value,
          samt:this.gstr3bform.get('samtrchrg').value,
          csamt:this.gstr3bform.get('csamtrchrg').value,
        },
        osup_nongst:
        {
          txval:this.gstr3bform.get('txvalnon').value,
        }
      },





      inter_sup:
      {
        unreg_details:
        [
          {
            pos:this.gstr3bform.get('posunr').value,
            txval:this.gstr3bform.get('txvalunr').value,
            iamt:this.gstr3bform.get('iamtunr').value,
          },
          {
            pos:this.gstr3bform.get('posunr').value,
            txval:this.gstr3bform.get('txvalunr').value,
            iamt:this.gstr3bform.get('iamtunr').value,
          },
          {
            pos:this.gstr3bform.get('posunr').value,
            txval:this.gstr3bform.get('txvalunr').value,
            iamt:this.gstr3bform.get('iamtunr').value,
          }
        ],
        comp_details:
        [
          {
            pos:this.gstr3bform.get('postax').value,
            txval:this.gstr3bform.get('txvaltax').value,
            iamt:this.gstr3bform.get('iamttax').value,
          },
          {
            pos:this.gstr3bform.get('postax').value,
            txval:this.gstr3bform.get('txvaltax').value,
            iamt:this.gstr3bform.get('iamttax').value,
          },
          {
            pos:this.gstr3bform.get('postax').value,
            txval:this.gstr3bform.get('txvaltax').value,
            iamt:this.gstr3bform.get('iamttax').value,
          }
        ],
        uin_details:
        [
          {
            pos:this.gstr3bform.get('posuin').value,
            txval:this.gstr3bform.get('txvaluin').value,
            iamt:this.gstr3bform.get('iamtuin').value,
          },
          {
            pos:this.gstr3bform.get('posuin').value,
            txval:this.gstr3bform.get('txvaluin').value,
            iamt:this.gstr3bform.get('iamtuin').value,
          },
          {
            pos:this.gstr3bform.get('posuin').value,
            txval:this.gstr3bform.get('txvaluin').value,
            iamt:this.gstr3bform.get('iamtuin').value,
          }
        ]
      }

 }
localStorage.setItem('gstin3b', this.gstr3bform.get('gstin').value),

localStorage.setItem('ret_period', this.gstr3bform.get('ret_period').value),

console.log('Gstr3bobject',Gstr3bobject);
this.data.saveGstr3bInvoice(Gstr3bobject).subscribe(response => {
  this.gstr3bres = response;
  console.log('gstr3b1form',this.gstr3bres);
  {
    swal(this.gstr3bres.ref_id, "","success");
     }
        
})
}

gstr3b(){
  this.router.navigate(['/gstr3b']);
}
}



