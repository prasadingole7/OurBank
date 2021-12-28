import { Component, DoCheck, OnInit } from '@angular/core';
import { NewApi } from 'src/app/services/newApi.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { bankUsers } from 'src/app/classes/bankUsers';


@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit, DoCheck  {

  addBook=new FormGroup({
    id:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    price:new FormControl("",[Validators.required]),
    publishDate:new FormControl("",[Validators.required]),
  })

  addUserToBank=new FormGroup({
    firstname:new FormControl("",[Validators.required]),
    lastname:new FormControl("",[Validators.required]),
    aadharnumber:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    mobilenumber:new FormControl("",[Validators.required]),
  })

  bankUser!:bankUsers;

  doCheck=false;

  ngDoCheck(){
    if(0 >=this.addBook.value["id"] ){
      this.doCheck=true;
    }
    else{
      this.doCheck=false
    }

  }


  constructor(private api: NewApi) {

  }



  ngOnInit(): void {

  }

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


  // onSubmit(){
  //   if(0 >=this.addBook.value["id"] ){
  //     // this.doCheck=true;
  //     console.log('error occured',this.doCheck);
  //   }
  //   else{
  //   this.api.postBook(this.addBook.value)
  //   .subscribe((data)=>{
  //   },(error)=>{
  //     alert('Id Already Used');
  //   });
  // }
  // }

  get uid(){
    return this.addBook.get('uid');
  }
  get firstname(){
    return this.addBook.get('firstname');
  }
  get lastname(){
    return this.addBook.get('lastname');
  }
  get aadharnumber(){
    return this.addBook.get('aadharnumber');
  }
  get address(){
    return this.addBook.get('address');
  }
  get mobilenumber(){
    return this.addBook.get('mobilenumber');
  }


  onSubmit(){
    this.bankUser=this.addUserToBank.value;
      console.log(this.bankUser);
      this.api.postBankUser(this.bankUser)
      .subscribe((data)=>{alert(data);});

    }


}
