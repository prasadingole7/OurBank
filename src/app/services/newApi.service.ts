import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { bankUsers } from '../classes/bankUsers';
import { admin } from '../classes/admin';

@Injectable()
export class NewApi {
  constructor(private http: HttpClient) {}

  ApiURL = 'http://localhost:3000/books';

  getBooks(): Observable<any> {
    return this.http.get(this.ApiURL);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.ApiURL + '/' + id);
  }
  postBook(object: any): Observable<any> {
    return this.http.post(this.ApiURL, object);
  }
  putBook(object: any, bookId: string): Observable<any> {
    return this.http.put(this.ApiURL + '/' + bookId, object);
  }
  bookDetails(id: string) {
    return this.http.get(this.ApiURL + '/' + id);
  }
  editBook(object: any, bookId: string): Observable<any> {
    return this.http.patch(this.ApiURL + '/' + bookId, object);
  }

  postUser(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
  }

  getUser(id: string): Observable<any> {
    return this.http.get('http://localhost:3000/users/' + id);
  }


  /************Online Bank Api Calls**********/
  getAllUsers():Observable<any>{
   
    return this.http.get("https://prasadingole7.github.io/ourbank/admin/users");
  }
  getBankUsers(id:string){
    return this.http.get("https://prasadingole7.github.io/ourbank/admin/1/user/"+id+"?adminName=prasad&password=prasad@123");
  }
  postBankUser(object:bankUsers): Observable<any>{
    return this.http.post("https://prasadingole7.github.io/ourbank/admin/1/registerUser", object,{responseType:'text' as 'json'});
  }
  deleteBankUser(id: number): Observable<any> {
    return this.http.delete("https://prasadingole7.github.io/ourbank/admin/1/deleteUser/"+id+"?adminName=prasad&password=prasad@123",{responseType:'text' as 'json'});
  }
  patchBankUser(id: number,object:bankUsers): Observable<any> {
    return this.http.patch("https://prasadingole7.github.io/ourbank/user/"+id+"/updateProfile",object,{responseType:'text' as 'json'});
  }
  adminLogin(adminObj:admin){
    return this.http.put("https://prasadingole7.github.io/ourbank/adminLogin/",adminObj,{responseType:'text' as 'json'});
  }
  viewAccountDetails(accountNumber: number):Observable<any>{
    return this.http.get("https://prasadingole7.github.io/ourbank/admin/userAccountDetails/"+accountNumber);
  }
}
