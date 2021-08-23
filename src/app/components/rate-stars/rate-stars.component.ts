import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-stars',
  templateUrl: './rate-stars.component.html',
  styleUrls: ['./rate-stars.component.scss']
})
export class RateStarsComponent implements OnInit {
 @Input()currentRate:number;
  constructor() { }

  ngOnInit(): void {
  }

}
