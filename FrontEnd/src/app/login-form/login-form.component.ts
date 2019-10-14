import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import {ApiService} from '../api.service';

/**
 * @title Input with error messages
 */
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'login-form-component',
  templateUrl: 'login-form.component.html',
  styleUrls: ['login-form.component.css'],
})

export class LoginFormComponent implements OnInit {
  error;

  constructor(private apiService: ApiService) {



  }


//   emailFormControl = new FormControl('', [
//   Validators.required,
//   Validators.email,
// ]);
//   passwordFormControl = new FormControl('', [
//     Validators.required,
//   ]);
//



  loginForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)

    });

   onSubmit() {
    console.warn(this.loginForm.value);
    this.apiService.register(this.loginForm.value).subscribe((data) => {

      console.log(data);
      this.error = data;

    });


  }

  ngOnInit(): void {

     this.apiService.getVersion().subscribe((data)=>{
       this.error = data;
     })

  }




}



