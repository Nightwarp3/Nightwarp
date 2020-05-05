// Built in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Third Party
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

// Custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DefaultComponent } from './components/default/default.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { CompletedBuildsComponent } from './components/completed-builds/completed-builds.component';
import { LogInDialogComponent } from './components/log-in-dialog/log-in-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DefaultComponent,
    OrderFormComponent,
    CompletedBuildsComponent,
    LogInDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
