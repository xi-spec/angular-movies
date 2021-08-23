import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() page: number;
  @Input() pageSize: number;
  @Input() collectionSize: number;
  @Output() onPageChange = new EventEmitter<number>();
  maxSize: number = 10;

  constructor() {}

  ngOnInit(): void {}

  newOnPageChange(page: number) {
    this.onPageChange.emit(page);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    window.innerWidth < 600 ? (this.maxSize = 5) : (this.maxSize = 10);
  }
}
