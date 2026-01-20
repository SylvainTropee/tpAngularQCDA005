import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Auth} from '../../services/auth';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router, private auth : Auth) {
  }

  goToSummary() {
    this.router.navigate(["/summary"])
  }

  login() {
    this.auth.login('Raymond')
    this.goToSummary()
  }
}
