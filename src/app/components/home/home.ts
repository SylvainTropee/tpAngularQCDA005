import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../services/auth';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  userLogin: string = ""
  password: string = ""
  errors : string[] = []

  constructor(private router: Router, private auth : Auth) {
  }

  goToSummary() {
    this.router.navigate(["/summary"])
  }

  login() {

    this.errors = [];

    if(this.userLogin.trim().length < 3){
      this.errors.push("Minimum 3 caratères !")
    }

    if(this.password.trim().length < 6){
      this.errors.push("Minimum 6 caratères !")
    }

    if(this.errors.length == 0){
      this.auth.login(this.userLogin)
      this.goToSummary()
    }

  }
}
