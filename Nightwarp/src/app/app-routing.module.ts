import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { CompletedBuildsComponent } from './components/completed-builds/completed-builds.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'order', component: OrderFormComponent },
	{ path: 'completed-builds', component: CompletedBuildsComponent },
	{ path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
