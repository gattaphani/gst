import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-b2csa',
  templateUrl: './b2csa.component.html',
  styleUrls: ['./b2csa.component.scss']
})
export class B2csaComponent implements OnInit {

  getb2csadata: 
  any;
  
  b2csaArr: any=[];
  
  
  
  constructor( private dataservice:DataService) { }
  
  
  
  ngOnInit() {
  
  this.getb2csa();
  
  }
  
  
  
  
  
  getb2csa()
  
  {
  
  this.dataservice.getb2csa().subscribe(data=>{
  
  this.getb2csadata =
  data
  
  this.b2csaArr.push(this.getb2csadata);
  
  console.log('b2csaArr',this.b2csaArr);
  
  })
  
  }
  
  }
  
  
