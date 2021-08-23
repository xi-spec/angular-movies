import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/model/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss'],
})
export class MoviesDetailComponent implements OnInit {
  movie$: MovieDetail;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}

  @ViewChild('videoPlayer') videoplayer: ElementRef;

  video() {
    console.log('im Play!');
    this.videoplayer?.nativeElement.play();
  }

  ngOnInit(): void {
    window.scroll(0,0);
    this.getMovie();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('movieId'));
    this.movieService
      .getMovieDetail(id)
      .subscribe((movie) => (this.movie$ = movie));
  }

}
