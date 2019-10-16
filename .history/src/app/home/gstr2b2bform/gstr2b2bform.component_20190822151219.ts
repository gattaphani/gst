import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';
import { gstr2object } from './../gstr2/gstr2';


@Component({
  selector: 'app-gstr2b2bform',
  templateUrl: './gstr2b2bform.component.html',
  styleUrls: ['./gstr2b2bform.component.scss']
})
export class Gstr2b2bformComponent implements OnInit {
  gstr2form:FormGroup;
  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

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
      "chksumb2b": [null, Validators.required],
      "inumb2b": [null, Validators.required],
      "idtb2b": [null, Validators.required],
      "valb2b": [null, Validators.required],
      "posb2b": [null, Validators.required],
      "rchrgb2b": [null, Validators.required],
      "inv_typb2b": [null, Validators.required],
      "numb2b": [null, Validators.required],
      "rtb2b": [null, Validators.required],
      "txvalb2b": [null, Validators.required],
      "iamtb2b": [null, Validators.required],
      "camtb2b": [null, Validators.required],
      "samtb2b": [null, Validators.required],
      "csamtb2b": [null, Validators.required],
      "elgb2b": [null, Validators.required],
      "tx_ib2b": [null, Validators.required],
      "tx_sb2b": [null, Validators.required],
      "tx_cb2b": [null, Validators.required],
      "tx_csb2b": [null, Validators.required],
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
      //  console.log('Gstr2object',Gstr2object);
      //  this.index.saveGstr2Invoice(Gstr2object).subscribe(response => {
      //   this.gstr2res = response;
      //    console.log(this.gstr2res);
      //    {
      //      swal(this.gstr2res.ref_id, "","success");
      //    }
         
      //  })

     
gstr2b2b()
{
  this.router.navigate(['/gstr2b2b']);
}

     }
  
