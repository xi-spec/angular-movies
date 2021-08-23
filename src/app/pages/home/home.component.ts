import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Movie } from '../../model/movie';
import database from 'src/app/constant/database';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  topMovies$: Movie[] = [];
  upComingMovies$: Movie[] = [];
  nowPlayingMovies$: Movie[] = [];
  popularMovies$: Movie[] = [];
  heroMovies$: Movie[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getTopMovies();
    this.getUpComingMovies();
    this.getNowPlayingMovies();
    this.getPopularMovies();
  }

  getPopularMovies(): void {
    this.movieService
      .getMoviesList(database.popular, 1)
      .pipe(map((result) => result.results))
      .subscribe((movies) => this.popularMovies$ = movies);
  }

  getTopMovies(): void {
    this.movieService
      .getMoviesList(database.top, 1)
      .pipe(map((result) => result.results))
      .subscribe((movies) => this.topMovies$ = movies);
  }

  getUpComingMovies(): void {
    this.movieService
      .getMoviesList(database.upComing, 1)
      .pipe(map((result) => result.results))
      .subscribe((movies) => this.upComingMovies$ = movies);
  }

  getNowPlayingMovies(): void {
    this.movieService
      .getMoviesList(database.nowPlaying, 1)
      .pipe(map((result) => result.results))
      .subscribe((movies) => {
        this.heroMovies$ = movies.slice(0, 5);
        return (this.nowPlayingMovies$ = movies);
      });
  }
}
