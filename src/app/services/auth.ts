import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  login(username : string) {
    const user = {name: username};
    localStorage.setItem('user',JSON.stringify(user))
  }

  logout(){
    localStorage.removeItem('user')
  }

  isLogged(){
    const user = localStorage.getItem('user')
    return !!user
  }

  getUsername(){
    if(this.isLogged()){
      return JSON.parse(localStorage.getItem('user')!).name
    }
    return ""
  }

}
