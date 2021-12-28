import { Component, OnInit } from '@angular/core';
import { NewApi } from 'src/app/services/newApi.service';
import { books } from 'src/app/classes/books';
import { bankUsers } from 'src/app/classes/bankUsers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css'],
})
export class GetDataComponent implements OnInit {
  constructor( private api: NewApi,private router:Router) {}


  book!:books[];
  bankUser!:bankUsers[];
  ngOnInit() {
    // this.getData();
    this.getAllBankCutomers();
  }

  getData() {
    this.api.getBooks().subscribe((data: books[]) => {
      this.book = data;
    });
  }

  getAllBankCutomers() {
    this.api.getAllUsers().subscribe((data) => {
      this.bankUser = data;
    });
  }


  id(idno:number){
      this.router.navigate(["navbar","id",idno]);
  }

}
