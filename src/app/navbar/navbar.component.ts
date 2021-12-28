import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  delete(){
    this.router.navigate(["navbar","delete-data"]);
  }
  get(){
    this.router.navigate(["navbar","get-data"]);
  }
  put(){
    this.router.navigate(["navbar","put-data"]);
  }
  post(){
    this.router.navigate(["navbar","post-data"]);
  }
  getAccountDetails(){
    this.router.navigate(["navbar","account-details"]);
  }

}
