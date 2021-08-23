import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  show = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((event) => this.modifyShow(event));
  }

  ngOnInit() {}

  modifyShow(location) {
    if (location.url.includes('video')) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
