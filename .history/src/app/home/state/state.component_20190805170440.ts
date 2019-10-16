import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  constructor(private http:HttpClient, private fb:FormBuilder, private dataservice: DataService) { }

  ngOnInit() {
  }

}
