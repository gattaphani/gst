import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';
@Component({
  selector: 'app-gstr2cdn',
  templateUrl: './gstr2cdn.component.html',
  styleUrls: ['./gstr2cdn.component.scss']
})
export class Gstr2cdnComponent implements OnInit {

  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
  }

  getgstr2() {

    this.dataservice.getgstr2cdndata().subscribe(data => {
 
     this.cdndata = data
     this.cdn = data.inv;
  
     console.log('b2b data :',this.b2bdata)
     console.log('b2b data.inv:',this.b2b)
   })
 }
 gstr2b2b()
 {
   this.router.navigate(['/gstr2b2bform']);
 }
 backgstr2b2b()
 {
   this.router.navigate(['/gstr2']);
 }

}
