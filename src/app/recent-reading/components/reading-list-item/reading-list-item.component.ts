import { ReadingBook } from './../../../entity/reading-ebook.entity';
import { AppConfig } from '../../../../environments/environment';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading-list-item',
  templateUrl: './reading-list-item.component.html',
  styleUrls: ['./reading-list-item.component.scss']
})
export class ReadingListItemComponent implements OnInit {

  @Input() readingBook: ReadingBook;

  ebookCover: string;
  hasBookCover = true;
  
  constructor() { }

  ngOnInit(): void {
    this.checkBookCover();
    if (this.hasBookCover) {
      this.ebookCover = `${AppConfig.baseUrl}${this.readingBook.ebookCoverUrl}`
    }
  }

    /**
   * 检查电子书对象封面
   */
     private checkBookCover(): void {
      if (this.readingBook.ebookCoverUrl == '' 
          || this.readingBook.ebookCoverUrl == null 
          || this.readingBook.ebookCoverUrl == undefined) {
        this.hasBookCover = false;
      }
    }
}
