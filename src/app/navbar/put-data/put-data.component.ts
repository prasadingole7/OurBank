import { Component, OnInit } from '@angular/core';
import { NewApi } from 'src/app/services/newApi.service';
import { FormControl,Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { bankUsers } from 'src/app/classes/bankUsers';

@Component({
  selector: 'app-put-data',
  templateUrl: './put-data.component.html',
  styleUrls: ['./put-data.component.css']
})
export class PutDataComponent implements OnInit {

  constructor(private api:NewApi) { }

  ngOnInit(): void {
  }

  editBook=new FormGroup({
    id: new FormControl("",[Validators.required]),
    name: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required]),
    publishDate: new FormControl("",[Validators.required])
  })

  addUserToBank=new FormGroup({
    uid:new FormControl("",[Validators.required]),
    firstname:new FormControl("",[Validators.required]),
    lastname:new FormControl("",[Validators.required]),
    aadharnumber:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    mobilenumber:new FormControl("",[Validators.required]),
  })
  obj={};
  bankUser!:bankUsers;

  // get id(){
  //   return this.addBook.get('id');
  // }
  // get name(){
  //   return this.addBook.get('name');
  // }
  // get price(){
  //   return this.addBook.get('price');
  // }
  // get publishDate(){
  //   return this.addBook.get('publishDate');
  // }

  // onSubmit1(){
  //   this.obj={
  //     name: this.editBook.value["name"],
  //     price:this.editBook.value['price'],
  //     publishDate:this.editBook.value["publishDate"]
  //   }
  //   console.log(this.obj);
  //     this.api.putBook(this.obj,this.editBook.value["id"])
  //   .subscribe((data)=>{},(error)=>{
  //     alert("Enter Valid Id");
  //   });
  // }


  onSubmit1(){
    this.bankUser=this.addUserToBank.value;
    console.log(this.bankUser);
      this.api.patchBankUser(this.addUserToBank.value["uid"],this.bankUser)
    .subscribe((data)=>{console.log(data)});
  }

}
