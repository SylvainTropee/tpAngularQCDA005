import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  public username : string | null

  constructor(private route : ActivatedRoute) {
    this.username = this.route.snapshot.paramMap.get('username')
  }

}
