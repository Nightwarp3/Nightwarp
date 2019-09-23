import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  imgPath: string;

  constructor() {
    if (Math.random() > .5) {
      this.imgPath = '../../../assets/JakeTheDog.png';
    } else {
      this.imgPath = '../../../assets/Narwhal.jpg';
    }

  }

  ngOnInit() {
  }

}
