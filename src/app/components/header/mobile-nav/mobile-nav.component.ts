import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent implements OnInit {
  isListOpen: boolean = false;
  pathName: string = this.location.path();

  constructor(private location: Location) {
    this.location.onUrlChange((url) => (this.pathName = url));
  }

  ngOnInit(): void {}

  openList() {
    this.isListOpen = true;
  }

  closeList() {
    this.isListOpen = false;
  }
}
