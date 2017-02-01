import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { LeftpanelComponent }  from './leftpanel/leftpanel.components';
import { middlePanelComponent }  from './middlepanel/middlepanel.component';
import { chatComponent }  from './middlepanel/chat.component';
import { rightPanelComponent }  from './rightpanel/rightpanel.component';
import {enableProdMode} from '@angular/core';

enableProdMode();

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,HeaderComponent,LeftpanelComponent,middlePanelComponent,chatComponent,rightPanelComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
