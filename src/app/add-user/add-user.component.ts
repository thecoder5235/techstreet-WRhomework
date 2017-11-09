import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import {FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  title = 'Add User';
  User: User;
  myForm: FormGroup;
  firstNameError: string;
  lastNameError: string;
  emailError: string;
  firstNameStatus: Boolean;
  lastNameStatus: Boolean;
  emailStatus: Boolean;
  obj: any;

  constructor (private fb:FormBuilder, private userService:UserService) {
    this.myForm = this.fb.group({
      first_name: ['',[Validators.compose([Validators.required])]],
      last_name: ['',[Validators.compose([Validators.required])]],
      email: ['',[Validators.compose([Validators.required])]]
    });

    let obj = JSON.parse(this.userService.serverResponse);

    this.firstNameError = obj.first_name[0];
    this.lastNameError = obj.last_name[0];
    this.emailError = obj.email[0];
    this.firstNameStatus = false;
    this.lastNameStatus = false;
    this.emailStatus = false;
  }

  save(model: User) {
    if(this.customCheck(model)) {
      console.log("Time to add the User");

    } else {
      this.firstNameStatus= true;
      this.lastNameStatus = true;
      this.emailStatus = true;
      
    }


  }
  ngOnInit() {
  }

    customCheck(controls) {

    this.firstNameStatus = this.firstNamevalidator(controls.first_name);
    this.lastNameStatus = this.lastNameValidator(controls.last_name);
    this.emailStatus = this.emailValidator(controls.email);

    if((this.firstNameStatus && this.lastNameStatus) && this.emailStatus) {
        return true;
    } else {
        return false;
    }
  }


  firstNamevalidator(firstName) {
    if( firstName !== null) {
