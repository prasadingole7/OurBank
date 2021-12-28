import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NewApi } from 'src/app/services/newApi.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private router:Router,private api:NewApi) { }

  ngOnInit(): void {
  }

  obj!:any;
  onClick=false;

  bankAccount=new FormGroup({
    accountNumber:new FormControl('')
  })

  viewBankAccountDetails(){
    this.api.viewAccountDetails(this.bankAccount.value['accountNumber'])
    .subscribe((data)=>{
      this.obj=data;
      this.onClick=true;
    console.log(data)});
    }

}
