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

  constructor() { }

  ngOnInit() {
    this.gstr2form = this.fb.group({
  }

}


// gstr2b2bur()
// {
//   this.router.navigate(['/gstr2b2bur']);
// }