import {GeneralBook} from '../../../core/entity';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {GeneralBookService} from "../../../services/remote";

@Component({
  selector: 'app-ebook-info-grid-container',
  templateUrl: './ebook-info-grid-container.component.html',
  styleUrls: ['./ebook-info-grid-container.component.scss']
})
export class EbookInfoGridContainerComponent implements OnInit, OnDestroy {

  @ViewChild('ebookInfoGridContainer', {static: true}) ebookInfoGridContainer: ElementRef<HTMLDivElement>;

  /**
   * 数据页总量
   */
  pages: number;

  /**
   * 每页项目数量
   */
  itemsPerPage: number;

  /**
   * 当前页码
   */
  loadedPage = 1;

  /**
   * 数据总量
   */
  total: number;

  ebookList: GeneralBook[] = [
    // 默认项, 电子书导入按键
    {
      id: null
    }
  ]

  constructor(private ebookService: GeneralBookService) {
  }

  ngOnInit(): void {
    // 计算页面首次加载项目数量
    const initTimes = Number.parseInt((this.ebookInfoGridContainer.nativeElement.clientHeight / 300).toFixed(0)) + 1;
    const initSize = Number.parseInt((this.ebookInfoGridContainer.nativeElement.clientWidth / 200).toFixed(0));
    this.itemsPerPage = initSize * initTimes;

    // 加载数据
    this.fetchBookList('10000', this.loadedPage, this.itemsPerPage);
  }

  ngOnDestroy(): void {
  }

  /**
   * 滚动时加载数据
   */
  onLoadingMore() {

    const targetPage = this.loadedPage + 1;
    if (targetPage > this.pages) {
      return;
    }

    this.fetchBookList('10000', targetPage, this.itemsPerPage);

  }

  /**
   * 获取电子书信息列表
   * @param accountId 用户账号ID
   * @param currentPage 当前页码
   * @param itemsPerPage 每页数据容量
   * @private
   */
  private fetchBookList(accountId: string, currentPage: number, itemsPerPage = 10) {
    this.ebookService.fetchBooks({currentPage: currentPage, limit: itemsPerPage, requests: {'accountId': accountId}})
      .subscribe(result => {
        console.log('fetchBookList', result);
        this.pages = result.data.pages;
        this.loadedPage = result.data.current;
        this.total = result.data.total;
        this.ebookList = [...this.ebookList, ...result.data.records];
      });
  }
}
