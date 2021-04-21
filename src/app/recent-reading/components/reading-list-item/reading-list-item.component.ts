import {RecentReadingBook} from '../../../core/entity';
import {AppConfig} from '../../../../environments/environment';

import {Component, Input, OnInit} from '@angular/core';
import {ReaderCtrlService} from "../../../services/local";

@Component({
  selector: 'app-reading-list-item',
  templateUrl: './reading-list-item.component.html',
  styleUrls: ['./reading-list-item.component.scss']
})
export class ReadingListItemComponent implements OnInit {

  @Input() readingBook: RecentReadingBook;

  ebookCover: string;
  hasBookCover = true;

  constructor(private readerCtrlService: ReaderCtrlService) {
  }

  ngOnInit(): void {
    this.checkBookCover();
    if (this.hasBookCover) {
      this.ebookCover = `${AppConfig.baseUrl}${this.readingBook.bookCoverUrl}`
    }
  }

  /**
   * 打开电子书
   */
  onBookOpened() {
    this.readerCtrlService.onBookOpened(this.readingBook);
  }

  /**
   * 检查电子书对象封面
   */
  private checkBookCover(): void {
    if (this.readingBook.bookCoverUrl == ''
      || this.readingBook.bookCoverUrl == null) {
      this.hasBookCover = false;
    }
  }
}
