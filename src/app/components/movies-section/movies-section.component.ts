import { Component, OnInit,Input } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.scss']
})
export class MoviesSectionComponent implements OnInit {
  @Input() movies: Movie[];
  @Input() title:string;

  constructor() { }

  ngOnInit(): void {
  }

}
