import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  
import HomeComponent from './home/home.component';
import { FormComponent } from './form/form.component';  

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HomeComponent,
    FormComponent,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
