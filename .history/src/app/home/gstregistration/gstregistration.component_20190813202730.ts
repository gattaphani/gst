import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-gstregistration',
  templateUrl: './gstregistration.component.html',
  styleUrls: ['./gstregistration.component.scss']
})
export class GstregistrationComponent implements OnInit {

  getr: any;

gstrArr: any = [];

gstrform: FormGroup;

states: any;

stateArr: any = [];



constructor(private http: HttpClient, private fb:FormBuilder, private dataservice: DataService) { }



getFindhsn: any = [];

findhsn: any;

ngOnInit() {

this.gstrform = this.fb.group(

{

"iam": ['',Validators.required],

"state": ['',Validators.required],

"district": ['',Validators.required],

"legalname": ['',Validators.required],

"pan": ['',Validators.required],

"email": ['',Validators.required],

"mobile": ['',Validators.required],

}

)



this.getgstregistration()

}

getgstregistration() 
{

this.dataservice.getgstregistration().subscribe(data => {

console.log('resultData',data.resultData);

for (let i = 0; i <= data.resultData.length; i++) 
{

this.states =data.resultData[i].state[i].stateName;

this.stateArr.push(this.states);

console.log('stateArr',this.stateArr);
for (let j = 0; j <= data.resultData.state.length; j++){

}

}

})

}

}
