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

}
