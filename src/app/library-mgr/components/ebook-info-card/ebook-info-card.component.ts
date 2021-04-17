import {GeneralBook} from '../../../core/entity';
import {Component, Input, OnInit} from '@angular/core';
import {AppConfig} from '../../../../environments/environment';
import {Router} from "@angular/router";
import {ReaderCtrlService} from "../../../services/local";


@Component({
  selector: 'app-ebook-info-card',
  templateUrl: './ebook-info-card.component.html',
  styleUrls: ['./ebook-info-card.component.scss']
})
export class EbookInfoCardComponent implements OnInit {

  @Input() bookEntity: GeneralBook;

  ebookCoverUrl: string = null;
  isCoverNull = false;
  isAddBookAction = false;

  constructor(private navRouter: Router, private readerCtrlService: ReaderCtrlService) {
  }

  ngOnInit(): void {

    if (this.bookEntity.id == null) {
      this.isAddBookAction = true;
      return;
    }

    if (this.bookEntity.bookCoverUrl == null || this.bookEntity.bookCoverUrl == '') {
      this.isCoverNull = true;
    } else {
      this.ebookCoverUrl = `${AppConfig.baseUrl}${this.bookEntity.bookCoverUrl}`;
    }
  }


  onBookOpened(bookId: string) {
    if (bookId == null) {
      console.log('Library Add Book Action Clicked');
      return;
    }

    console.log(`book: ${bookId} Clicked.`);
    this.navRouter.navigate(['/', 'epub_reader']).then(() => {
      this.readerCtrlService.currentBookInfo.next(this.bookEntity);
    });
  }
}
