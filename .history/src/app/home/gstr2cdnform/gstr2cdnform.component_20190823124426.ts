import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';
import { gstr2object } from './../gstr2/gstr2';

@Component({
  selector: 'app-gstr2cdnform',
  templateUrl: './gstr2cdnform.component.html',
  styleUrls: ['./gstr2cdnform.component.scss']
})
export class Gstr2cdnformComponent implements OnInit {
  gstr2form:FormGroup
  gstr2res: Object;
  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.gstr2form = this.fb.group({
      "gstin": [null, Validators.required],
      "fp": [null, Validators.required],
      "ctin": [null, Validators.required],

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
      "tx_cscdn": [null, Validators.required]
    })

    this.savegstr2obj();
  }



  savegstr2obj()
  {
    debugger;
    let Gstr2object:gstr2object = 
    {
      // gstin:this.gstr2form.get('gstin').value,
      // fp:this.gstr2form.get('fp').value,
      // ctin:this.gstr2form.get('gstin').value,

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
    ]
  }

        console.log('Gstr2cdn',Gstr2object);

         sessionStorage.setItem('gstin', this.gstr2form.get('gstin').value)

         sessionStorage.setItem('fp',this.gstr2form.get('fp').value)

        sessionStorage.setItem('ctin',this.gstr2form.get('ctin').value)

       this.index.saveGstr2Invoice(Gstr2object).subscribe(response => {

        this.gstr2res = response;
        
         console.log('gstrcdn',this.gstr2res);
         {
           swal(this.gstr2res.ref_id, "","success");
         }
         
       })
    
      }


   
     
gstr2cdn()
{
  this.router.navigate(['/gstr2cdn']);
}

}