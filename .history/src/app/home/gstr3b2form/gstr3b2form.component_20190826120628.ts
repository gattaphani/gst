import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { gstr3bobject} from '../gstr3b/gstr3b';
import { IndexService } from 'src/app/index/services/index.service';

@Component({
  selector: 'app-gstr3b2form',
  templateUrl: './gstr3b2form.component.html',
  styleUrls: ['./gstr3b2form.component.scss']
})
export class Gstr3b2formComponent implements OnInit {
  gstr3bform:FormGroup;
  gstr3bres:any;

  constructor( private fb: FormBuilder, private data: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }

  ngOnInit() {
    {
      this.gstr3bform = this.fb.group({
        "gstin": [null, Validators.required],
        "ret_period": [null, Validators.required],
        "txval": [null, Validators.required],
        "iamt": [null, Validators.required],
        "camt": [null, Validators.required],
        "samt": [null, Validators.required],
        "csamt": [null, Validators.required],
        "pos": [null, Validators.required],
        "ty": [null, Validators.required],
        "inter": [null, Validators.required],
        "intra": [null, Validators.required],
      });
    }
  }


savegst3bobj(){
    let Gstr3bobject:gstr3bobject = 
    {
      
      ret_period:this.gstr3bform.get('ret_period').value,
      
      itc_elg:
      {
        itc_avl:
        [
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          },
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          },
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          }
        ],
        itc_rev:
        [
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          },
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          }
        ],
        itc_net:
        {
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
        },
        itc_inelg:
        [
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          },
          {
            ty:this.gstr3bform.get('ty').value,
            iamt:this.gstr3bform.get('iamt').value,
            camt:this.gstr3bform.get('camt').value,
            samt:this.gstr3bform.get('samt').value,
            csamt:this.gstr3bform.get('csamt').value,
          }
        ]
      },
      inward_sup:
      {
        isup_details:
        [
          {
            ty:this.gstr3bform.get('ty').value,
            inter:this.gstr3bform.get('inter').value,
           intra:this.gstr3bform.get('intra').value,
          }
        ]
      },
      intr_ltfee:
      {
        intr_details:
        {
          iamt:this.gstr3bform.get('iamt').value,
          camt:this.gstr3bform.get('camt').value,
          samt:this.gstr3bform.get('samt').value,
          csamt:this.gstr3bform.get('csamt').value,

        }
      }
}
localStorage.setItem('gstin3b', this.gstr3bform.get('gstin').value),

localStorage.setItem('ret_period', this.gstr3bform.get('ret_period').value),

console.log('Gstr3b2object',Gstr3bobject);
this.data.saveGstr3bInvoice(Gstr3bobject).subscribe(response => {
  this.gstr3bres = response;
  console.log('gstr3b2form',this.gstr3bres);
  {
    swal(this.gstr3bres.ref_id, "","success");
     }
        
})
}
gstr3b(){
  this.router.navigate(['/gstr3b']);
}
}

