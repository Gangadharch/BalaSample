import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FirstmoduleComponent } from './components/firstmodule/firstmodule.component';
import { SecondmoduleComponent } from './components/secondmodule/secondmodule.component';
import { ThirdmoduleComponent } from './components/thirdmodule/thirdmodule.component';
import { FourthmoduleComponent } from './components/fourthmodule/fourthmodule.component';
import { SixthmoduleComponent } from './components/sixthmodule/sixthmodule.component';
import { FifthmoduleComponent } from './components/fifthmodule/fifthmodule.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FirstmoduleComponent,
    SecondmoduleComponent,
    ThirdmoduleComponent,
    FourthmoduleComponent,
    SixthmoduleComponent,
    FifthmoduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
