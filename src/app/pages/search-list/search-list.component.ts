import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { map, } from 'rxjs/operators';

import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  movieName: string;
  searchMoviesList$: Movie[];
  page: number = 1;
  collectionSize: number;
  pageSize: number;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.page = 1;
      this.movieName = params['movie'];
      this.getSearchMovies(this.page);
    });
  }

  ngOnInit(): void {}
  getSearchMovies(page): void {
    this.movieService
      .getSearchMovies(this.movieName, page)
      .pipe(
        map(({ results, total_pages }) => {
          this.pageSize = results.length;
          this.collectionSize = total_pages * this.pageSize;
          return results;
        })
      )
      .subscribe((movies) => (this.searchMoviesList$ = movies));
  }

  onPageChange(page: number): void {
    window.scroll(0, 0);
    this.getSearchMovies(page);
  }
}
