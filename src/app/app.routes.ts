import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'app-landing',
        pathMatch: 'full'
    },

    {
        path: 'app-landing',
        component: LandingComponent
    },
    
    {
        path:'app-my-component',
        component: MyComponentComponent
    }
];
