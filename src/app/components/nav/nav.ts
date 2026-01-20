import {Component, input, Input} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {Auth} from '../../services/auth';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  //@Input() public username? : string
  public username = input<string>("")

  constructor(private auth: Auth, private router: Router) {
  }

  logout() {
    this.auth.logout()
    this.router.navigate([''])
  }
}
