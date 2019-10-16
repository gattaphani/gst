import { Component, OnInit } from '@angular/core';
import { IndexService } from 'src/app/index/services/index.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { gstr2object } from './gstr2';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-gstr2',
  templateUrl: './gstr2.component.html',
  styleUrls: ['./gstr2.component.scss']
})
export class Gstr2Component implements OnInit {

  constructor(private fb: FormBuilder, private dataservice: DataService, 
    private router:Router, private route: ActivatedRoute, private index:IndexService) { }

  ngOnInit() {

    
  }

}










