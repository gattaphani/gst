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

  
  gstr3bdata: any;

  constructor(private dataservice: DataService,private data: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.getgstr3bview();
  }

  getgstr3bview() {

    this.data.getgstr3b().subscribe(data => {
 
     this.gstr3bdata = data.nt;
     
    
     console.log('gstr3b table :',this.cdndata)
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
