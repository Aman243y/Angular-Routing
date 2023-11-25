import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { TypingComponent } from './typing/typing.component';
import { PwgComponent } from './pwg/pwg.component';
import { BothComponent } from './both/both.component';

const routes: Route[]=[
  {path: 'typing' , component: TypingComponent},
  {path: 'pwg' , component:PwgComponent},
  {path: 'both' , component:BothComponent}

];



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TypingComponent,
    PwgComponent,
    BothComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
