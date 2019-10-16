import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(private http:HttpClient, private fb:FormBuilder, private dataservice: DataService) { }

  ngOnInit() {
    this.getstatelist()
    this.statemasterForm=this.fb.group({
      'stateName':[null,Validators.required],
      'email':[null,Validators.required],
      })
  }


  getstatelist(){
    this.dataservice.getstatedata().subscribe(data => {
      this.stateList = data.resultData;
      console.log(this.stateList);
 
    })
  }

  create(){
   
    var requestObj = {
      "stateName": this.stateName,
      "email":this.email,
      "lastUpdatedBy": sessionStorage.getItem('userId'),
    };
 
    this.dataservice.addstate(requestObj).subscribe(data => {
      this.createEmployment = data;
      console.log(this.createEmployment);
 
      this.getstatelist()

    })

 
  }

  formReset(myForm) {
    myForm.reset();
  }

  edit(id){
    this.dataservice.getstateById(id).subscribe(data => {
      this.getstateById = data.resultData;
      this.statemasterForm.setValue({
        'stateName': this.getstateById.stateName,
        'email':this.getstateById.email
      })
    })
  }

}
