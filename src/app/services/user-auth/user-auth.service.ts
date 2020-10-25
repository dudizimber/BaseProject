import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private auth: AuthService) { }

  async login(email: string, password: string) {

    try {
      await this.auth.login(email, password);
      return true;
    } catch (error) {
      throw error.message;
    }

  }

  async forgotPassword(email: string) {

    try {
      await this.auth.forgotPassword(email);
      return true;
    } catch (error) {
      throw error.message;
    }

  }
}
