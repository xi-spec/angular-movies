import { Location } from '@angular/common';
import { Component, HostListener, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss'],
})
export class MovieVideoComponent implements OnInit {
  showBack: boolean = false;
  timeout: any;
  videoId: string;

  constructor(
    private location: Location,
    private movieService: MovieService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    if (!this.showBack) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.showBack = true;
    }
    this.getMovieVideo();
  }

  goBack(): void {
    this.location.back();
  }

  getMovieVideo(): void {
    const id = Number(this.route.snapshot.paramMap.get('movieId'));
    this.movieService
      .getMovieVideo(id)
      .subscribe(({ results }) => (this.videoId = results[0].key));
  }
}
