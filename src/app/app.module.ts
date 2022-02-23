import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import Home from './Home/home.component';
import Create from './Create/create.component';
import About from './About/about.component';
import Register from './Auth/register.component';

import routes from './routes';
import Navbar from './Navbar/app.nav.component';

@NgModule({
  declarations: [AppComponent, Home, About, Create, Register, Navbar],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
