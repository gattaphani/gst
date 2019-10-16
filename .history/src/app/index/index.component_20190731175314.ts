import { HttpClient } from '@angular/common/http';
import { IndexService } from './services/index.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { DataService } from '../services/data.service';



declare var $: any;


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  loginform: FormGroup;
  registerform: FormGroup;
  loginActionActive = false;
  registerdisabled:boolean=false;
  spin:boolean=false;
  recrutmentData: any;
  createdby: boolean=false;
  emailInput:any;
  res:any;
  roleNagivation: any;
  applicationid: any;
  getUserListId: any;
  Url="http://192.168.2.167:8080/gst/rest/user/forgotPassword/{email}"
  abc: any;




  constructor(private authService: AuthService, private routerNavigate: Router, private fb: FormBuilder, 
    private index: IndexService,private http:HttpClient, private dataservice: DataService) { }


  LoginAction(formData: any) {
    debugger
    console.log(username)
    if (this.authService.loginAction(formData)) {
      this.loginActionActive = true;
      this.loginform.reset();
    }
  }

  navigateToDashboard() {
    if (this.loginActionActive) {
      debugger;
      this.roleNagivation = sessionStorage.getItem('userRole')
      if (this.roleNagivation == 'undefined') {
        // let requestobj = {};
        // requestobj['positionId'] = localStorage.getItem('positionId');
        // requestobj['userId'] = sessionStorage.getItem('userId');
        // if (localStorage.getItem('positionId') != null && sessionStorage.getItem('userId') != null) {
        //   this.dataservice.getuserlistByIds(requestobj).subscribe(res => {
        //     this.applicationid = res;
        //     if (this.applicationid.errorMessage == "Application already exists") {
        //       swal("Already applied for this position", "Please Login...!!!!").then((value) => {
        //         this.routerNavigate.navigate(['login'])
        //         $("#loginModal").hide();
        //         localStorage.clear();
        //         sessionStorage.clear();
        //       });
        //     }
        //     if (this.applicationid.errorMessage == 'Application not exists') {
        //       this.routerNavigate.navigate(['dashboard']);
        //     }
        //   });
        // }
        // if (localStorage.getItem('positionId') == null && sessionStorage.getItem('userId') != null) {
        //   const id = sessionStorage.getItem('userId');
        //   this.dataservice.getUserListById(id).subscribe(res => {

        //     this.getUserListId = res.resultData;
        //     this.routerNavigate.navigate(['userList']);
        //     console.log(this.getUserListId);

        //   })
        // }
        this.routerNavigate.navigate(['dashboard']);
      }
      if (this.roleNagivation == 'ADMIN') {
        this.routerNavigate.navigate(['registered']);
      }
    }
  }

  ngOnInit() {

    this.loginform = this.fb.group({
      'useName':[null, Validators.required],
      'password': [null, Validators.required]
    });


    //this.getRecurimentList();


    this.registerform = this.fb.group({
      'username': [null, Validators.required],
      'password':[null, Validators.required],
      'clientName': [null, Validators.required],
      'type': [null, Validators.required],
      'address':[null, Validators.required],
      'state': ["", [Validators.required]],
      'city': [null, Validators.required],
      'pincode': [null, Validators.required],
      'panNumber': [null, Validators.required],
      'relationShip': [null, Validators.required],
      'servicesRequired': [null, Validators.required],
      'eamilAddress': [null, Validators.required],
      'mobileNumber': [null, Validators.required],
      'status': [null, Validators.required],
      
      
    })
//          {
//     "username": "mAGGIDI",
//     "password": "abcd1234",
//     "role": "user",
//     "clientName": "nagaraju",
//     "type": "nagaraju",
//     "address": "nagaraju",
//     "state": "nagaraju",
//     "city": "nagaraju",
//     "pinCode": 6546555,
//     "panNumber": "nag",
//     "relationShip": "nagarajfdgu",
//     "servicesRequired": "nagaraju3",
//     "eamilAddress": "nagarajuv",
//     "mobileNumber": 654654687986,
//     "status": "Active"
// }

    this.authService.logindata.subscribe(data => {
      this.navigateToDashboard();
    });

 

    $(document).ready(function () {

      $('.login').click(function () {
        $("#loginModal").toggle();
      });

      $('.login').click(function () {
        $("#loginModal").show();
        $('#sign').show();
      });

      $('#sign').click(function () {
        $("#loginModal").hide();
        $('#sign').hide();
      });


      $('#signup').click(function () {
        $("#reigsterModal").toggle();
        $('#sign1').show();
      });

      $('#sign1').click(function () {
        $("#reigsterModal").hide();
        $(this).hide();
      });

      $('#openRegModal1').click(function () {
        $("#reigsterModal,#sign1").show();
        $("#loginModal,#sign").hide();
      });

      $('#openRegModal').click(function () {
        $("#reigsterModal,#sign1").hide();
        $("#loginModal,#sign").show();
      });
    });

  }

  // viewResult() {
  //   this.routerNavigate.navigate(['viewresults']);
  // }

  register(formdata) {

   console.log(formdata)
    // this.registerdisabled=true;
    // this.spin=true;
 
    // let requestobj = {
    //   'role': 'user'
    // }

    // requestobj = { ...formdata, ...requestobj };
    formdata['role'] = "admin";
  this.index.register(formdata).subscribe(res => {

      // this.registerdisabled=false;
      // this.spin=false;
    
      debugger;
   
     if (res['statusCode'] == 200) {
        swal("Registered Successfully!", "Thank you", "success");
        $("#reigsterModal").hide();
      }
      else if (res['statusCode'] == 226) {
        swal("Email id and aadhar already exists");
        
      }
     },
      err => {
        if (err.status == 500) {
          swal("User Registration failed due to internal server error.");
        }
    })

   

  }

//   getRecurimentList(){
//     this.index.getRecrutment().subscribe(data => {
//       this.recrutmentData = data.resultData;
//       console.log(this.recrutmentData);
//   })

// }

// onClick(list) {
 
//   $("#loginModal").show();
//   $('#sign').show();
//   const id = localStorage.setItem('positionId', list.id);
//   const applno = localStorage.setItem("applno", list.positionName);
//   console.log(list);

// }

forget()
{
  this.createdby= true;
}


forgotPassword123() {

  alert();
  this.http.get(this.Url+this.emailInput).subscribe((data)=>{
  this.res=data;
  if(this.res.responseMessage == "Password Sent to Your Email."){
  swal(this.res.responseMessage, "","success");
  }
  });
  this.createdby = false;
}


backToLogin()
{
  this.createdby = false;
}

LoginPage() {
    this.routerNavigate.navigate(['loginpageaction']);
}




}
