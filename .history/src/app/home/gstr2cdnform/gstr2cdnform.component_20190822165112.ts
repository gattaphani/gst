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

  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.gstr2form = this.fb.group({
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
               chksum:this.gstr2form.get('chksumb2b').value,
               inum:this.gstr2form.get('inumb2b').value,
               idt:this.gstr2form.get('idtb2b').value,
               val:this.gstr2form.get('valb2b').value,
               pos:this.gstr2form.get('posb2b').value,
               rchrg:this.gstr2form.get('rchrgb2b').value,
               inv_typ:this.gstr2form.get('inv_typb2b').value,
                 itms:
               [
                 {
                   num:this.gstr2form.get('numb2b').value,
                   itm_det:
                   {
                     rt:this.gstr2form.get('rtb2b').value,
                     txval:this.gstr2form.get('txvalb2b').value,
                     iamt:this.gstr2form.get('iamtb2b').value,
                     camt:this.gstr2form.get('camtb2b').value,
                     samt:this.gstr2form.get('samtb2b').value,
                     csamt:this.gstr2form.get('csamtb2b').value,
                   },
                   itc:
                   {
                  
                     elg:this.gstr2form.get('elgb2b').value,
                     tx_i:this.gstr2form.get('tx_ib2b').value,
                     tx_s:this.gstr2form.get('tx_sb2b').value,
                     tx_c:this.gstr2form.get('tx_cb2b').value,
                     tx_cs:this.gstr2form.get('tx_csb2b').value,
                   }
                 }
               ]
             }
           ]
         }
       ]
     
      }
        console.log('Gstr2object',Gstr2object);
        sessionStorage.setItem('gstin', this.gstr2form.get('gstin').value)
        sessionStorage.setItem('fp',this.gstr2form.get('fp').value)
        sessionStorage.setItem('ctin',this.gstr2form.get('ctin').value,)
       this.index.saveGstr2Invoice(Gstr2object).subscribe(response => {
        this.gstr2res = response;
         console.log(this.gstr2res);
         {
           swal(this.gstr2res.ref_id, "","success");
         }
         
       })
    }


   
     
gstr2b2b()
{
  this.router.navigate(['/gstr2b2b']);
}
}
