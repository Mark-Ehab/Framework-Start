import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/contact/contact';
import { Pagenotfound } from './components/pagenotfound/pagenotfound';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:Home,title:"Home"},
    {path:"about",component:About,title:"About"},
    {path:"portfolio",component:Portfolio,title:"Portfolio"},
    {path:"contact",component:Contact,title:"Contact"},
    {path:"**",component:Pagenotfound,title:"404 - Page Not Found"}
];
