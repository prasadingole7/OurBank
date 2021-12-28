import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewApi } from '../services/newApi.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  user=new FormGroup({
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    id:new FormControl(""),
    password:new FormControl("")
  })
  constructor(private router:Router,private api:NewApi) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(["login"]);
  }
  // obj={};
  userDetails(){
    // this.obj={
    //     id:this.user.value['userId'],
    //     password:this.user.value['password'],
    //     firstName:this.user.value['firstName'],
    //     lastName:this.user.value['lastName']
    // }
    console.log(this.user.value);
    this.api.postUser(this.user.value).subscribe((data)=>{
    },(error)=>{
      alert('Id Already Used');
    });
  }

}
