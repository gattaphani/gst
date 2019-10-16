import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gstr2b2burform',
  templateUrl: './gstr2b2burform.component.html',
  styleUrls: ['./gstr2b2burform.component.scss']
})
export class Gstr2b2burformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


gstr2()
{
  this.router.navigate(['/gstr2cdn']);
}