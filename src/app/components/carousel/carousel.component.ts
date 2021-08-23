import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() heroMovies:Movie[];
  showNavigationArrows = false;
  showNavigationIndicators = true;

  constructor() { }

  ngOnInit(): void {
  }

}
