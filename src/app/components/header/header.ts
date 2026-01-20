import { Component } from '@angular/core';
import {Auth} from '../../services/auth';
import {Nav} from '../nav/nav';

@Component({
  selector: 'app-header',
  imports: [
    Nav
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  public username : string

  constructor(private auth: Auth) {
    this.username = this.auth.getUsername()
  }
}
