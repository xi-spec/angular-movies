import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isScrolling: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    const { scrollTop } = document.documentElement || document.body;
    if (scrollTop >= 60) {
      this.isScrolling = true;
    }
    if (scrollTop === 0) {
      this.isScrolling = false;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
