import {Component, Input, OnInit} from '@angular/core';
import {AppConfig} from '../../../../environments/environment';
import {GeneralBookSimpleDto} from "../../../core/dto";

@Component({
  selector: 'app-ebook-list-item',
  templateUrl: './ebook-list-item.component.html',
  styleUrls: ['./ebook-list-item.component.scss']
})
export class EbookListItemComponent implements OnInit {

  @Input() ebookEntity: GeneralBookSimpleDto;
  @Input() ebookItemTabIndex: number;
  ebookCover: string;
  ebookTitle: string;
  ebookAuthors: string;

  hasBookCover = true;

  constructor() {
  }

  ngOnInit(): void {
    this.checkBookCover();
    if (this.hasBookCover) {
      this.ebookCover = `${AppConfig.baseUrl}${this.ebookEntity.bookCoverUrl}`
    }
    this.ebookTitle = this.ebookEntity.bookTitle;
    this.ebookAuthors = this.ebookEntity.bookAuthors;
  }

  onBookSelected() {
    console.log('ebook Selected', this.ebookEntity);
  }

  /**
   * 检查电子书对象封面
   */
  private checkBookCover(): void {
    if (this.ebookEntity.bookCoverUrl == ''
      || this.ebookEntity.bookCoverUrl == null) {
      this.hasBookCover = false;
    }
  }
}
