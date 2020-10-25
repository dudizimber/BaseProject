import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/core/router/router.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { UserAuthService } from 'src/app/services/user-auth/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forgotPasswordForm = false;

  constructor(private userAuth: UserAuthService, private router: RouterService, private alert: AlertService) { }

  ngOnInit(): void {
  }

  forgotPassword() {
    this.forgotPasswordForm = !this.forgotPasswordForm;
  }

  submit(event: any) {
    event.preventDefault();


    if (!this.forgotPasswordForm) {
      return this.userAuth.login(event.target.form.elements[0].value, event.target.form.elements[1].value)
        .then(() => this.router.goToHome())
        .catch((e) => this.alert.error(e))
    }

    return this.userAuth.forgotPassword(event.target.form.elements[0].value)
      .then(() => this.alert.success('An email was sent to you with instructions'))
      .catch((e) => this.alert.error(e))

  }
}
