import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { fullobject } from '../invoice';
import swal from 'sweetalert';
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from 'src/app/index/services/index.service';


@Component({
  selector: 'app-gstr2b2b',
  templateUrl: './gstr2b2b.component.html',
  styleUrls: ['./gstr2b2b.component.scss']
})
export class Gstr2b2bComponent implements OnInit {

  constructor(private dataservice: DataService,private DataService: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }



  ngOnInit() {

  }
getgstr2b2b() {

   this.dataservice.getgstr2b2bdata().subscribe(data => {

    
    this.b2b = data
 this.array.push(this.b2bList)

    console.log('b2b :',this.array)

  })

}
}
