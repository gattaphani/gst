import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/index/services/index.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { gstr2object } from '../gstr2/gstr2';


@Component({
  selector: 'app-gstr2b2burform',
  templateUrl: './gstr2b2burform.component.html',
  styleUrls: ['./gstr2b2burform.component.scss']
})
export class Gstr2b2burformComponent implements OnInit {

  constructor(private fb: FormBuilder, private dataservice: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }

    gstr2form:FormGroup;

  ngOnInit() {
    this.gstr2form = this.fb.group({
      "gstin": [null, Validators.required],
      "fp": [null, Validators.required],
      "ctin": [null, Validators.required],

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

  })

}

savegstr2obj()
{
  debugger;
  let Gstr2object:gstr2object = 
  {
    gstin:this.gstr2form.get('gstin').value,
  
    fp:this.gstr2form.get('fp').value,



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
      ]
    }
      console.log('Gstr2',Gstr2object);

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





// gstr2b2bur()
// {
//   this.router.navigate(['/gstr2b2bur']);
// }

}