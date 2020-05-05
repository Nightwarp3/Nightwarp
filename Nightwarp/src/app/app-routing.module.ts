import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { CompletedBuildsComponent } from './components/completed-builds/completed-builds.component';


const routes: Routes = [
    { path: '', component: DefaultComponent },
    { path: 'order', component: OrderFormComponent },
    { path: 'completed-builds', component: CompletedBuildsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
