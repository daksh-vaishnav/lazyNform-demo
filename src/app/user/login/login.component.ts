import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  genders: string[];
  users: [];
  constructor() {
    this.genders = ['male', 'female'];
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userData: new FormGroup({
        unm: new FormControl(null, [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ]),
        pwd: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });
  }

  onSubmitForm() {
    console.log(this.userForm);
    // this.userForm.reset();
  }
  onHobbieAdd() {
    (<FormArray>this.userForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    );
  }
}
