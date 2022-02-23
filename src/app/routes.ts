import { Routes } from '@angular/router';
import About from './About/about.component';
import Register from './Auth/register.component';
import Create from './Create/create.component';
import Home from './Home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'create', component: Create },
  { path: 'about', component: About },
  { path: 'register', component: Register },
];
export default routes;
