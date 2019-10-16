import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gstr1',
  templateUrl: './gstr1.component.html',
  styleUrls: ['./gstr1.component.scss']
})
export class Gstr1Component implements OnInit {
  departments = [
    { "id": 1, "name": "b2b" },
    { "id": 2, "name": "b2ba" },
    { "id": 3, "name": "b2cl" },
    { "id": 4, "name": "b2cla" },
    { "id": 5, "name": "b2cs" },
    { "id": 6, "name": "b2csa" },
    { "id": 7, "name": "nil" },
    { "id": 8, "name": "cdnr" },
    { "id": 9, "name": "exp" },
    { "id": 10, "name": "expa" },
    { "id": 11, "name": "txpd" },
    { "id": 12, "name": "txpda" },
    { "id": 13, "name": "doc_issue" },
    { "id": 14, "name": "cdnur" },
    { "id": 15, "name": "cdnura" },

  ]


  constructor(private router: Router) { }

  ngOnInit() {

  }
  onSelect(item) {
    this.router.navigate(['/dashboard1', item.id])
  }
}
