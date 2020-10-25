import { Injectable, } from '@angular/core';
import {  Router, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  public currentRoute: string;

  urlHistory: string[] = [
    '/'
  ];

  constructor(private router: Router) {
  }

  async navigateByUrl(url: string) {
    try {
      await this.router.navigateByUrl(url);
      this.currentRoute = url;
      this.urlHistory.push(this.currentRoute);
    } catch (error) {
      console.error(error);
      return false;
    }
    return true;
  }

  back() {
    this.navigateByUrl(this.urlHistory.shift());
  }

  goToHome() {
    this.navigateByUrl('/');
  }

}
