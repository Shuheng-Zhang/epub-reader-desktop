import { GeneralBook } from './../../../entity/general-ebook.entity';
import { Component, Input, OnInit } from '@angular/core';
import { AppConfig } from '../../../../environments/environment';


@Component({
  selector: 'app-ebook-info-card',
  templateUrl: './ebook-info-card.component.html',
  styleUrls: ['./ebook-info-card.component.scss']
})
export class EbookInfoCardComponent implements OnInit {

  @Input() bookEntity: GeneralBook;

  ebookCoverUrl: string = null;
  ebookFileUrl: string = null;
  isCoverNull = false;
  isAddBookAction = false;

  constructor() { }

  ngOnInit(): void {
    
    if (this.bookEntity.id == null) {
      this.isAddBookAction = true;
      return;
    }

    if (this.bookEntity.bookCoverUrl == null || this.bookEntity.bookCoverUrl == '') {
      this.isCoverNull = true;
    } else {
      this.ebookCoverUrl = `${AppConfig.baseUrl}${this.bookEntity.bookCoverUrl}`
    }
    this.ebookFileUrl = `${AppConfig.baseUrl}${this.bookEntity.bookFileUrl}`
  }


  onBookOpened(bookFileUrl: string) {
    if (bookFileUrl == null) {
      console.log('Library Add Book Action Clicked');
      return;
    }

    console.log(`book: ${bookFileUrl} Clicked.`)
  }
}
