import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  isSearchInputOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openSearchInput() {
    this.isSearchInputOpen = true;
  }

  closeSearchInput() {
    this.isSearchInputOpen = false;
  }

  search() {
    console.log('Searching');
  }
}
