import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-desktop-nav',
  templateUrl: './desktop-nav.component.html',
  styleUrls: ['./desktop-nav.component.scss'],
})
export class DesktopNavComponent implements OnInit {
  pathName: string = this.location.path();

  constructor(private location: Location) {
    this.location.onUrlChange((url) => (this.pathName = url));
  }

  ngOnInit(): void {}
}
