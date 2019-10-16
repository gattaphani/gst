import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';


@Component({
  selector: 'app-gstr2b2b',
  templateUrl: './gstr2b2b.component.html',
  styleUrls: ['./gstr2b2b.component.scss']
})
export class Gstr2b2bComponent implements OnInit {
  b2b:any=[];
  b2bdata: any=[];
  b2barr: any;

  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }
    
    


  ngOnInit() {
    this.getgstr2b2b()
  }
getgstr2b2b() {

   this.dataservice.getgstr2b2bdata().subscribe(data => {

    this.b2b = data.inv;
    this.b2barr.push(this.b2b)
 
    
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
