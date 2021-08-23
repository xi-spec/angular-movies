import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';

import { Movie } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  title: string;
  movieCategory: string;
  movies$: Movie[];
  collectionSize: number;
  pageSize: number;
  isLoading:boolean = true;

  page: number = 1;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.movieCategory = this.route.snapshot.paramMap.get('movieCategory');
        this.getMoviesList(this.movieCategory, this.page);
        this.title = this.setTitle(this.movieCategory);
      });
  }

  ngOnInit(): void {
    this.getMoviesList(this.movieCategory, this.page);
  }

  setTitle(movieCategory): string {
    const title =
      movieCategory.slice(0, 1).toUpperCase() +
      movieCategory.slice(1).toLowerCase().split('_').join(' ');
    return title;
  }

  getMoviesList(movieCategory: string, page: number): void {
    this.movieService
      .getMoviesList(movieCategory, page)
      .pipe(
        map(({ results, total_pages }) => {
          this.pageSize = results.length;
          this.collectionSize = this.calculateCollectionSize(
            total_pages,
            this.pageSize
          );
          return results;
        })
      )
      .subscribe((movies) => (this.movies$ = movies));
  }

  onPageChange(page: number): void {
    window.scroll(0,0);
    this.getMoviesList(this.movieCategory, page);
  }

  calculateCollectionSize(totalPages, pageSize): number {
    return totalPages * pageSize;
  }
}
