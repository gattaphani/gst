import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { gstr3bobject} from '../gstr3b/gstr3b';
import { IndexService } from 'src/app/index/services/index.service';


@Component({
  selector: 'app-gstr3b1form',
  templateUrl: './gstr3b1form.component.html',
  styleUrls: ['./gstr3b1form.component.scss']
})
export class Gstr3b1formComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
