import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(msg: string) {
    alert('Success:\n' + msg);
  }

  error(msg: string) {
    alert('Error:\n' + msg);
  }
}
