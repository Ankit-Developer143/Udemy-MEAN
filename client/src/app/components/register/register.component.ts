import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  createForm() {
    this.form = this.fb.group({
      email: '',
      username: '',
    });
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
