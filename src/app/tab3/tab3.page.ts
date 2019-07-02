import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {
    
  }

  goPage(url:string){
    window.open(url, '_blank', 'location=yes');

  }




  

}
