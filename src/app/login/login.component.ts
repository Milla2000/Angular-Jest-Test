import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  alertMsg = '';

  constructor(private fb: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  login() {
    console.log(this.form.value);

    this.apiService.LoginService(this.form.value).subscribe(
      (res) => {
        // Successful login
        console.log(res);
        this.alertMsg = 'successfull login'; // Clear any previous error message
        setTimeout(() => {
          this.alertMsg = ''; // Clear the error message after a few seconds
        }, 3000);
        // Handle successful login logic here, e.g., navigate to a different page
      },
      (error) => {
        // Error handling for unsuccessful login
        console.error(error);
        if (error.status === 400) {
          console.log(error);
          this.alertMsg = error.error.message; // Use the error message from the response
        } else {
          this.alertMsg = 'An error occurred. Please try again later.';
        }

        setTimeout(() => {
          this.alertMsg = ''; // Clear the error message after a few seconds
        }, 3000);
      }
    );
  }
}
