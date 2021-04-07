import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { SsoService } from '../../core/sso.service';
import * as firebase from 'firebase';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'appdashboard-autologin',
  templateUrl: './autologin.component.html',
  styleUrls: ['./autologin.component.scss']
})
export class AutologinComponent implements OnInit {

  subscription: Subscription;
  FCM_Supported: boolean;
  APP_IS_DEV_MODE: boolean;
  isMobile: boolean;
  constructor(
    private route: ActivatedRoute,
    public auth: AuthService,
    private router: Router,
    public sso: SsoService
  ) {
    this.APP_IS_DEV_MODE = isDevMode();
    console.log('SSO - autologin page isDevMode ', this.APP_IS_DEV_MODE);

    this.getRouteAndJWTfromUrl();

  }

  ngOnInit() {

    console.log('SSO - autologin page');

    this.checkIfFCMIsSupported();
    this.detectMobile();
  }


  detectMobile() {
    // this.isMobile = true;
    this.isMobile = /Android|iPhone/i.test(window.navigator.userAgent);
    console.log('WS-REQUEST-SERVED - IS MOBILE ', this.isMobile);
  }


  checkIfFCMIsSupported() {
    if (firebase.messaging.isSupported()) {
      // Supported
      this.FCM_Supported = true;
      console.log('SSO (autologin page) - *** >>>> FCM is Supported: ', this.FCM_Supported);
    } else {
      // NOT Supported
      this.FCM_Supported = false;
      console.log('SSO (autologin page) - *** >>>> FCM is Supported: ', this.FCM_Supported);
    }
  }

  getRouteAndJWTfromUrl() {

    // -------------
    // @ Logout
    // -------------
    this.logout();

    console.log('SSO - getUrl');

    this.route.params.subscribe((params) => {
      console.log('SSO - autologin page params ', params)

      const route = params.route
      console.log('SSO - autologin page params route', route);


      const JWT = params.token
      console.log('SSO - autologin page params token ', JWT);

      // const url_array = url.split('?')
      // console.log('SSO - autologin url_array ', url_array);

      // const route = url_array[0];
      // console.log('SSO - autologin route ', route);

      // const dirty_JWT = url_array[1];
      // console.log('SSO - autologin dirty_JWT ', dirty_JWT);

      // const JWT = 'JWT' + ' ' +  dirty_JWT.slice(4);
      // console.log('SSO - autologin cleaned_JWT ', JWT);
      // this.auth.chat21CreateFirebaseCustomToken(JWT).subscribe(fbtoken => { // })

      // this.firebaseSigninAndRedirect(route, JWT)



      this.sso.chat21CreateFirebaseCustomToken(JWT).subscribe(fbtoken => {

        console.log('SSO - autologin chat21CreateFirebaseCustomToken res ', fbtoken);

        if (fbtoken) {

          firebase.auth().signInWithCustomToken(fbtoken)
            .then(firebase_user => {
              console.log('SSO - autologin - signInWithCustomToken ', firebase_user);


              // if (!this.APP_IS_DEV_MODE && this.FCM_Supported === true) {
              //   this.auth.getPermission();
              // }
             
              if (firebase_user) {
                this.sso.getCurrentAuthenticatedUser(JWT).subscribe(auth_user => {
                  console.log('SSO - autologin getCurrentAuthenticatedUser RES ', auth_user);

                  const user = {firstname: auth_user.firstname, lastname: auth_user.lastname, _id: auth_user._id, token: JWT }

                  localStorage.setItem('user', JSON.stringify(user));

                  this.auth.publishSSOloggedUser();

                  this.router.navigate([route]);

                  // email: "pregino@f21test.it"
                  // emailverified: true
                  // firstname: "Gino"
                  // lastname: "Pre"
                  // token: "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRkMzBiZmYwMTk1ZjAwMTdmNzJjNmQiLCJlbWFpbCI6InByZWdpbm9AZjIxdGVzdC5pdCIsImZpcnN0bmFtZSI6Ikdpbm8iLCJsYXN0bmFtZSI6IlByZSIsImVtYWlsdmVyaWZpZWQiOnRydWUsImlhdCI6MTU5OTQ4ODIzMiwiYXVkIjoiaHR0cHM6Ly90aWxlZGVzay5jb20iLCJpc3MiOiJodHRwczovL3RpbGVkZXNrLmNvbSIsInN1YiI6InVzZXIiLCJqdGkiOiJkMzZiNGUwOS00MzQ1LTRmZDYtYTNmZi1hMzY0NjdmNzdjYjgifQ.FMRFwxyHq2_fbR4_oEnG4cFKqZQxsK_YScJKKSptfUo"
                  // _id: "5ddd30bff0195f0017f72c6d"

                }, (error) => {
                  console.log('SSO - autologin getCurrentAuthenticatedUser ', error);

                }, () => {
                  console.log('SSO - autologin getCurrentAuthenticatedUser * COMPLETE *');
                });
              }
            })
        }

      }, (error) => {
        console.log('SSO - autologin chat21CreateFirebaseCustomToken ', error);
      }, () => {
        console.log('SSO - autologin chat21CreateFirebaseCustomToken * COMPLETE *');

      });
    });
  }



  logout() {
    console.log('RUN LOGOUT FROM NAV-BAR')
    this.auth.showExpiredSessionPopup(false);
    this.auth.signOut();
  }

}
