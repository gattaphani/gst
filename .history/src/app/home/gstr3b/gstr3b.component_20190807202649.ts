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
    let fullObject:fullobject = 

}

}


