// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, ArrayOfComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewApi } from './services/newApi.service';
import { HighlightDirective } from './highlight.directive';
import { IdComponent } from './navbar/get-data/id/id.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AccountDetailsComponent } from './navbar/account-details/account-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayOfComponents,
    HeaderComponent,
    HighlightDirective,
    IdComponent,
    CreateAccountComponent,
    AccountDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [NewApi,AuthGuard,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
