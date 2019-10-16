import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';

@Component({
  selector: 'app-gstr2b2bur',
  templateUrl: './gstr2b2bur.component.html',
  styleUrls: ['./gstr2b2bur.component.scss']
})
export class Gstr2b2burComponent implements OnInit {
  b2burdata: any;

  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.getgstr2b2bur();
  }
getgstr2b2bur() {

    this.dataservice.getgstr2b2bur().subscribe(data => {
 
     this.b2burdata = data.inv;
     
    
     console.log('gstr2b2burtable :',this.b2burdata)
   })
 }
 gstr2b2burform()
 {
   this.router.navigate(['/gstr2b2burform']);
 }
 backgstr2b()
 {
   this.router.navigate(['/gstr2']);
 }
}
