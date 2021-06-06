import {GeneralBookmark} from '../../../core/entity';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {GeneralBookmarkService} from "../../../services/remote";
import {CommResStatEnum} from "../../../core/enums/comm-res-stat.enum";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-bookmark-list-container',
  templateUrl: './bookmark-list-container.component.html',
  styleUrls: ['./bookmark-list-container.component.scss']
})
export class BookmarkListContainerComponent implements OnInit {

  @ViewChild('bookmarkListContainer', {static: true}) bookmarkListContainer: ElementRef<HTMLDivElement> ;
  private bookId: string;

  pages: number;
  itemsPerPage: number;
  loadedPage = 1;
  total: number;

  bookmarkList: Array<GeneralBookmark> = [];

  constructor(private activatedRoute: ActivatedRoute, private bookmarkService: GeneralBookmarkService) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.bookmarkList = [];
      this.loadedPage = 1;

      this.bookId = params['ebookId'];
      this.itemsPerPage = Number.parseInt((this.bookmarkListContainer.nativeElement.clientHeight / 200).toFixed(0)) + 1;

      this.fetchBookmarks(this.bookId, this.loadedPage, this.itemsPerPage);
    });
  }

  /**
   * 滚动时加载数据
   */
  onLoadingMore() {

    const targetPage = this.loadedPage + 1;
    if (targetPage > this.pages) {
      return;
    }

    this.fetchBookmarks(this.bookId, targetPage, this.itemsPerPage);

  }

  private fetchBookmarks(bookId: string, currentPage = 1, limit = 10) {
    this.bookmarkService.fetchBookmark({currentPage: currentPage, limit: limit, requests: {bookId: bookId}}).subscribe(respData => {
      console.log('fetchBookmarks', respData);
      if (CommResStatEnum.OK === respData.code) {
        this.pages = respData.data.pages;
        this.loadedPage = respData.data.current;
        this.total = respData.data.total;
        this.bookmarkList = [...this.bookmarkList, ...respData.data.records];
      }
    });
  }
}
