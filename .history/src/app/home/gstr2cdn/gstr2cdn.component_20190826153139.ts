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
  cdndata: any;
 
  constructor(private dataservice: DataService,private data: DataService, private fb: FormBuilder, 
    private router: Router, private route: ActivatedRoute, private index: IndexService) { }

  ngOnInit() {
    this.getgstr2cdn();
  }

  getgstr2cdn() {

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

//  base64textString: any;
//   filedata = [];
//  handleFileSelect(i, evt, index) {
 
//   var files = evt.target.files;
//   var file = files[0];

//   if (files && file) {
//     var reader = new FileReader();
//     reader.onload = this._handleReaderLoaded.bind(this);
//     reader.readAsBinaryString(file);
//   }

// }

// _handleReaderLoaded(readerEvt) 
// {
//   var binaryString = readerEvt.target.result;
//   this.base64textString = btoa(binaryString);
//   //this.filedata.push({i:this.base64textString});
//   this.filedata.push(this.base64textString);
//   console.log(this.filedata);
// }

}
