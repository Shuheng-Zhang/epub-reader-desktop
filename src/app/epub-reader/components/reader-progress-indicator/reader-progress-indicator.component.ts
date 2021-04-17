import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reader-progress-indicator',
  templateUrl: './reader-progress-indicator.component.html',
  styleUrls: ['./reader-progress-indicator.component.scss']
})
export class ReaderProgressIndicatorComponent implements OnInit {

  currentChapterTitle = 'Indexing...';
  readingProgress: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  fnFormatProgressBarTooltip(value: number): string {
    return `${value}%`;
  }
}
