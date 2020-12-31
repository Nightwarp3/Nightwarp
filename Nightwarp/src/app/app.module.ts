// Built in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Third Party Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

// Third Party Auth
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

// Our Components
import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { CompletedBuildsComponent } from './components/completed-builds/completed-builds.component';
import { NightwarpLogoComponent } from './components/nightwarp-logo/nightwarp-logo.component';
import { HomeComponent } from './components/home/home.component';

// Our Services
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    NavBarComponent,
    OrderFormComponent,
    CompletedBuildsComponent,
    HomeComponent,
    NightwarpLogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
	MatDialogModule,
	SocialLoginModule,
	MatMenuModule
  ],
  providers: [
	  AuthService,
	  { provide: 'SocialAuthServiceConfig',
		  useValue: { autoLogin: false,
			providers: [
				{ id: GoogleLoginProvider.PROVIDER_ID, provider: new GoogleLoginProvider('136583970844-mh0e79be17khvnrt584ak2u45panp0vq.apps.googleusercontent.com')}
				// { id: FacebookLoginProvider.PROVIDER_ID, provider: new FacebookLoginProvider('clientId') }
			]
		} as SocialAuthServiceConfig}
  ],
  bootstrap: [NavBarComponent]
})
export class AppModule { }
