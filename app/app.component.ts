import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="page-container row-fluid container-fluid\" style="height:100%;">
  <chat-leftpanel></chat-leftpanel>
  <chat-header></chat-header>
  <div class="container-fluid chatMain" style="margin-left:210px; background:#fff; height:100%; top:60px; position:fixed; right:0px;">
  <div class="row" style="height:100%;">
  <middle-panel></middle-panel>
  <right-panel></right-panel>
  </div>
  </div>    
  </div>`,
})
export class AppComponent  { 


}
