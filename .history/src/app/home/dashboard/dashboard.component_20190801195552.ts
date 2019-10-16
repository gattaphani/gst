import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  constructor(private DataService: DataService, private fb: FormBuilder, private dataservice: DataService, private sanitizer: DomSanitizer,private router:Router, private route: ActivatedRoute) {

    
  }


  ngOnInit() {

    
      
    }

    

   


  


}
