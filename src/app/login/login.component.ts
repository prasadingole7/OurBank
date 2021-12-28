import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { admin } from '../classes/admin';
import { NewApi } from '../services/newApi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit,DoCheck {

  constructor(private router: Router,private api:NewApi ) { }

  login=new FormGroup({
    adminname:new FormControl(""),
    password:new FormControl("")
  })
  obj={
    password:"",
  }
  adminObj!:admin;

  ngOnInit(): void {
  }
  ngDoCheck(){
    //  this.login.value['password']
    //  this.login.value['id']
    //  console.log(this.login.value['password'])
    }

  //   loginDetails(){
  //     let isLogin=false;
  //     this.api.getUser(this.login.value['id']).subscribe((password)=>{
  //     this.obj=password;
  //     // console.log(this.obj.password);
  //   });
  //   setTimeout(() => {
  //     if(this.obj.password===this.login.value['password']){
  //       this.router.navigate(["navbar"])
  //       .then(nav => {
  //         console.log(nav);
  //       }, err => {
  //         console.log(err)
  //       });
  //       isLogin=true;
  //       // console.log(this.login.value['password']);
  //     }
  //     else{
  //       // alert("Password is wrong, re-enter your Password");
  //       console.log("Password is wrong");
  //     }}, 1000);

  // }


  loginDetails():boolean{
    let isLogin:any;
    this.adminObj=this.login.value;
    // console.log(this.adminObj);
    this.api.adminLogin(this.adminObj).subscribe((data)=>{
      // console.log(data);
      isLogin=data;
  });
  setTimeout(() => {
        if(isLogin){
          this.router.navigate(["navbar"])
          .then(nav => {
            // console.log(nav);
          }, err => {
            //console.log(err)
          });
        }
        else{
          console.log("Password is wrong");
        }}, 2000);
        return isLogin;

}


  createAccount(){
    this.router.navigate(["create-account"]);
  }

}
