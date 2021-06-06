import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GeneralBookService} from "../../../services/remote";
import {CommResStatEnum} from "../../../core/enums/comm-res-stat.enum";
import {GeneralBookSimpleDto} from "../../../core/dto";

@Component({
  selector: 'app-ebook-list-container',
  templateUrl: './ebook-list-container.component.html',
  styleUrls: ['./ebook-list-container.component.scss']
})
export class EbookListContainerComponent implements OnInit {

  @ViewChild('ebookListContainer', {static: true}) ebookListContainer: ElementRef<HTMLDivElement>;

  accountId: string = '10000';

  pages: number;
  itemsPerPage: number;
  loadedPage = 1;
  total: number;

  ebookList: Array<GeneralBookSimpleDto> = [];

  constructor(private bookService: GeneralBookService) {
  }

  ngOnInit(): void {
    this.itemsPerPage = Number.parseInt((this.ebookListContainer.nativeElement.clientHeight / 72).toFixed(0));
/*
    this.fetchBookmarkContainedBookInfoList(this.accountId, this.loadedPage, this.itemsPerPage);
*/
    this.fetchBookList(this.accountId, this.loadedPage, this.itemsPerPage);
  }

  /**
   * 滚动时加载数据
   */
  onLoadingMore() {

    const targetPage = this.loadedPage + 1;
    if (targetPage > this.pages) {
      return;
    }

/*
    this.fetchBookmarkContainedBookInfoList(this.accountId, this.loadedPage, this.itemsPerPage);
*/
    this.fetchBookList(this.accountId, targetPage, this.itemsPerPage);
  }

/*
  private fetchBookmarkContainedBookInfoList(accountId: string, currentPage = 1, limit = 10) {
    this.bookService.fetchBookmarkContainedBooks({currentPage: currentPage, limit: limit, requests: {accountId: accountId}}).subscribe(respData => {
      console.log('fetchBookmarkContainedBookInfoList', respData);
      if (CommResStatEnum.OK === respData.code) {
        this.pages = respData.data.pages;
        this.loadedPage = respData.data.current;
        this.total = respData.data.total;
        this.ebookList = [...this.ebookList, ...respData.data.records];
      }
    })
  }
*/

  private fetchBookList(accountId, currentPage = 1, limit = 10) {
    this.bookService.fetchBooksSimple({
      currentPage,
      limit,
      requests: {accountId: accountId}
    }).subscribe(respData => {
      if (CommResStatEnum.OK === respData.code) {
        this.pages = respData.data.pages;
        this.loadedPage = respData.data.current;
        this.total = respData.data.total;
        this.ebookList = [...this.ebookList, ...respData.data.records];
      }
    })
  }
}
