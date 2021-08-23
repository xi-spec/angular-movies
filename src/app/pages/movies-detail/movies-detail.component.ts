import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { Movie, MovieDetail } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailComponent implements OnInit {
  movie$: MovieDetail;
  similarMovies$: Movie[];
  movieId: number;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.movieId = Number(this.route.snapshot.paramMap.get('movieId'));
    router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.movieId = Number(this.route.snapshot.paramMap.get('movieId'));
      this.getMovie();
      this.getSimilarMovie();
    });
  }

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  video() {
    console.log('im Play!');
    this.videoplayer?.nativeElement.play();
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.getMovie();
    this.getSimilarMovie();
  }

  getMovie(): void {
    window.scroll(0,0);
    this.movieService
      .getMovieDetail(this.movieId)
      .subscribe((movie) => (this.movie$ = movie));
  }

  getSimilarMovie() {
    this.movieService
      .getSimilarMovie(this.movieId)
      .subscribe((result) => (this.similarMovies$ = result.results));
  }
}
