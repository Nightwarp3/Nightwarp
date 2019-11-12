import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nightwarp';

  public selected: string = '';

  public changeView(selected: string){
    this.selected = selected;
  }
}
