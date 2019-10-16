import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

import { DataService }
from '../../services/data.service';

@Component({
  selector: 'app-gstregistration',
  templateUrl: './gstregistration.component.html',
  styleUrls: ['./gstregistration.component.scss']
})
export class GstregistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
