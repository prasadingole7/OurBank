import { Component, OnInit } from '@angular/core';
import { NewApi } from 'src/app/services/newApi.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {

  delete=new FormGroup({
    id:new FormControl('')
  })

  constructor(private router:Router,private api:NewApi) { }

  ngOnInit(): void {

  }
  // id="";
  // deleteData(){
  //   this.api.deleteBook(this.delete.value['id'])
  //   .subscribe((data)=>{},(error)=>{
  //     // console.log(error);
  //     alert("Enter Valid Id");
  //   });
  //   }

  deleteData(){
    this.api.deleteBankUser(this.delete.value['id'])
    .subscribe((data)=>{alert(data);});
  }



}
