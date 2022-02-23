import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './app.nav.component.html',
  styles: [],
})
export default class Navbar {
  isLogin: boolean = false;
  constructor(private router: Router) {}
  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.isLogin = true;
      this.router.navigate(['/home']);
    }
  }
  handlLogout() {
    console.log('in handlelogyou');
    this.isLogin = false;
    localStorage.removeItem('user');
    window.location.reload();
  }
}
