import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { gstr3bobject} from '../gstr3b';
import { IndexService } from 'src/app/index/services/index.service';

@Component({
  selector: 'app-gstr3b',
  templateUrl: './gstr3b.component.html',
  styleUrls: ['./gstr3b.component.scss']
})
export class Gstr3bComponent implements OnInit {

  gstr3bform:FormGroup;

  constructor(private DataService: DataService, private fb: FormBuilder, private dataservice: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }

  ngOnInit() 
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

  savegst3bobj(){
    let gstr3bobject:Gstr3bobject = 
    {
      gstin:this.gstr3bform.get('gstin').value,
      ret_period:this.gstr3bform.get('ret_period').value,
      sup_details:
      {
        osup_det:
        {
          txval:this.gstr3bform.get('txval').value,
          iamt:this.gstr3bform.get('iamt').value,
          camt:this.gstr3bform.get('camt').value,
          samt:this.gstr3bform.get('samt').value,
          csamt:this.gstr3bform.get('csamt').value,

        },
        osup_zero:
        {
          txval:this.gstr3bform.get('txval').value,
          iamt:this.gstr3bform.get('iamt').value,
          csamt:this.gstr3bform.get('csamt').value,
        },
        osup_nil_exmp:
        {
          txval:this.gstr3bform.get('txval').value,
        },
        isup_rev:
        {
          txval:this.gstr3bform.get('txval').value,
          iamt:this.gstr3bform.get('iamt').value,
          camt:this.gstr3bform.get('camt').value,
          samt:this.gstr3bform.get('samt').value,
          csamt:this.gstr3bform.get('csamt').value,
        },
        osup_nongst:
        {
          txval:this.gstr3bform.get('txval').value,
        }
      },
      inter_sup:
      {
        unreg_details:
        [
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          },
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          },
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          }
        ],
        comp_details:
        [
          {
            pos:this.gstr3bform.get('pos').value,
            txval:this.gstr3bform.get('txval').value,
            iamt:this.gstr3bform.get('iamt').value,
          },
        ]
      }
}

}


}

{
  "gstin": "05AVHPB7348G1ZP",
  "ret_period": "042017",
  "sup_details": {
    "osup_det": {
      "txval": 250,
      "iamt": 100,
      "camt": 200,
      "samt": 300,
      "csamt": 400
    },
    "osup_zero": {
      "txval": 250,
      "iamt": 100,
      "csamt": 400
    },
    "osup_nil_exmp": {
      "txval": 250
    },
    "isup_rev": {
      "txval": 250,
      "iamt": 100,
      "camt": 200,
      "samt": 300,
      "csamt": 400
    },
    "osup_nongst": {
      "txval": 250
    }
  },
  "inter_sup": {
    "unreg_details": [
      {
        "pos": "07",
        "txval": 250,
        "iamt": 200
      },
      {
        "pos": "07",
        "txval": 250,
        "iamt": 200
      },
      {
        "pos": "07",
        "txval": 250,
        "iamt": 200
      }
    ],
    "comp_details": [
      {
        "pos": "07",
        "txval": 250,
        "iamt": 200
      },
      {
        "pos": "07",
        "txval": 250,
        "iamt": 200
      },
      {
        "pos": "07",
        "txval": 250,
        "iamt": 200
      }
    ],
    "uin_details": [
      {
        "pos": "07",
        "txval": 250,
        "iamt": 200
      },
      {
        "pos": "07",
        "txval": 250,
        "iamt": 200
      },
      {
        "pos": "07",
        "txval": 250,
        "iamt": 200
      }
    ]
  },
  "itc_elg": {
    "itc_avl": [
      {
        "ty": "IMPG",
        "iamt": 136.53,
        "camt": 274,
        "samt": 162.99,
        "csamt": 103
      },
      {
        "ty": "IMPS",
        "iamt": 136.53,
        "camt": 274,
        "samt": 162.99,
        "csamt": 103
      },
      {
        "ty": "ISRC",
        "iamt": 136.53,
        "camt": 274,
        "samt": 162.99,
        "csamt": 103
      },
      {
        "ty": "ISD",
        "iamt": 136.53,
        "camt": 274,
        "samt": 162.99,
        "csamt": 103
      },
      {
        "ty": "OTH",
        "iamt": 136.53,
        "camt": 274,
        "samt": 162.99,
        "csamt": 103
      }
    ],
    "itc_rev": [
      {
        "ty": "RUL",
        "iamt": 136.53,
        "camt": 274,
        "samt": 162.99,
        "csamt": 103
      },
      {
        "ty": "OTH",
        "iamt": 136.53,
        "camt": 274,
        "samt": 162.99,
        "csamt": 103
      }
    ],
    "itc_net": {
      "iamt": 136.53,
      "camt": 274,
      "samt": 162.99,
      "csamt": 103
    },
    "itc_inelg": [
      {
        "ty": "RUL",
        "iamt": 136.53,
        "camt": 274,
        "samt": 162.99,
        "csamt": 103
      },
      {
        "ty": "OTH",
        "iamt": 136.53,
        "camt": 274,
        "samt": 162.99,
        "csamt": 103
      }
    ]
  },
  "inward_sup": {
    "isup_details": [
      {
        "ty": "GST",
        "inter": 100,
        "intra": 200
      }
     
    ]
  },
  "intr_ltfee": {
    "intr_details": {
      "iamt": 10,
      "camt": 20,
      "samt": 30,
      "csamt": 40
    }
  }
}
