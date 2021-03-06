import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';
import swal from 'sweetalert';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { gstr3bobject} from '../gstr3b/gstr3b';
import { IndexService } from 'src/app/index/services/index.service';
@Component({
  selector: 'app-gstr3bview',
  templateUrl: './gstr3bview.component.html',
  styleUrls: ['./gstr3bview.component.scss']
})
export class Gstr3bviewComponent implements OnInit {

  cdndata: any;

  constructor(private dataservice: DataService,private data: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.getgstr2cdn();
  }

  getgstr() {

    this.data.getgstr2cdndata().subscribe(data => {
 
     this.cdndata = data.nt;
     
    
     console.log('cdntable :',this.cdndata)
   })
 }
 gstr2cdn()
 {
   this.router.navigate(['/gstr2cdnform']);
 }
 backgstr2b2b()
 {
   this.router.navigate(['/gstr2']);
 }

}
