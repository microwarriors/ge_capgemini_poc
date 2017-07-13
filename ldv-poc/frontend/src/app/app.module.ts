import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { RouterModule,Routes }   from '@angular/router';
import { DataDetailsComponent } from './data-details/data-details.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';

const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
		{ path: 'login',  component: LoginComponent},
  { path: 'data',  component: DataComponent },
  {path:'dataDetails', component: DataDetailsComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    DataDetailsComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
	   RouterModule.forRoot(routes),
	   HttpModule,
	   FormsModule,
	   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
