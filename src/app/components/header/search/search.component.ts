import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  isSearchInputOpen: boolean = false;
  movieName: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openSearchInput() {
    this.isSearchInputOpen = true;

  }

  closeSearchInput() {
    this.isSearchInputOpen = false;
  }

  search() {
    this.router.navigate(['search'], { queryParams: { movie: this.movieName } });
  }
}
