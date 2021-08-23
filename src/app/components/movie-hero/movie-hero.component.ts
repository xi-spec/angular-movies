import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { Movie } from '../../model/movie';
import database from 'src/app/constant/database';

@Component({
  selector: 'app-movie-hero',
  templateUrl: './movie-hero.component.html',
  styleUrls: ['./movie-hero.component.scss'],
})
export class MovieHeroComponent implements OnInit {
  @Input() movie$?: Movie;
  backgroundImage: string;
  currentRate: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const movieChange = changes.movie$;
    if (movieChange) {
      this.currentRate = this.movie$?.vote_average / 2;
      this.backgroundImage =
        database.image_base + '/original' + this.movie$?.backdrop_path;
    }
  }

  ngOnInit(): void {}
}
