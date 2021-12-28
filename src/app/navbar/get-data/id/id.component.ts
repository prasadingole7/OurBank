import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewApi } from 'src/app/services/newApi.service';

@Component({
  selector: 'app-id',
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.css']
})
export class IdComponent implements OnInit {

  constructor(private api:NewApi,private route:ActivatedRoute) { }
  obj:any={
    id:"",
    publishDate:"",
    name:"",
    price:""
  }

  bankCustomer:any={
    uid:0,
    firstname:"",
    lastname:"",
    aadharnumber:0,
    address:"",
    mobilenumber:0,
    email:"",
    list:[]
  }

  id="";
  ngOnInit(): void {
    this.id=this.route.snapshot.params['idno'];

      // this.api.bookDetails(this.id).subscribe((data)=>
      // {this.obj=data});

      this.getBankCutomers();

  }

  getBankCutomers(){
    this.api.getBankUsers(this.id).subscribe((data:any)=>{this.bankCustomer=data;
      console.log(data);});
  }

}
