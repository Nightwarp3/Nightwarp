import { Injectable } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Injectable()

export class AuthService {

	public User: SocialUser;
	public LoggedIn: boolean = false;

	constructor(private authService: SocialAuthService) {
		this.authService.authState.subscribe((user: SocialUser) => {
			this.User = user;
			this.LoggedIn = user != null;
			console.log(user);
		})
	}

	signInWithGoogle() {
		this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
	}
  
	signInWithFacebook() {
		this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
	}

	signOut() {
		this.authService.signOut();
	}
}
