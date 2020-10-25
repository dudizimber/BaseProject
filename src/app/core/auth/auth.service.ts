import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: Observable<User>;

  constructor(private auth: AngularFireAuth) {
    this.user = this.auth.user;
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  forgotPassword(email: string) {
    return this.auth.sendPasswordResetEmail(email);
  }

  getToken() {
    return this.auth.idToken;
  }
}
