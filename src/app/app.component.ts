import { Component } from '@angular/core';
import{FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [
 ReactiveFormsModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Student';

  loginForm = new FormGroup({
    phoneNumber: new FormControl(''),
    pin: new FormControl('')
  })

  login(){
    console.log(this.loginForm.value.phoneNumber ?? '');
  }

}
