import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SignInOut } from './SignInOut';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [ReactiveFormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  

  constructor(private http: HttpClient, private routerService: Router) {
  }

  loginForm = new FormGroup({
    phoneNumber: new FormControl(''),
    pin: new FormControl('')
  })

  login() {

    

    this.http.get<SignInOut>('http://localhost:8080/greeting').subscribe(clientesResponse => {
      console.log('Greetings response: ', clientesResponse);
    });
    this.routerService.navigateByUrl("/app-my-component");
  }

}
