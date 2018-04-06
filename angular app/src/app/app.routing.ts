import { GreetingComponent } from './greeting/greeting.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'greeting', component: GreetingComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);