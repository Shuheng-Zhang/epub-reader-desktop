import {ReaderCtrlService} from '../../../services/local';
import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Book, Rendition} from 'epubjs';
import {AppConfig} from '../../../../environments/environment';
import {Subscription} from "rxjs";
import Navigation from "epubjs/types/navigation";
import Themes from "epubjs/types/themes";


@Component({
  selector: 'app-reader-content-container',
  templateUrl: './reader-content-container.component.html',
  styleUrls: ['./reader-content-container.component.scss']
})
export class ReaderContentContainerComponent implements OnInit, OnDestroy {

  /**
   * 电子书对象
   */
  ebook: Book;
  /**
   * 电子书渲染对象
   */
  rendition: Rendition;

  /**
   * 电子书内容导航对象
   */
  navigation: Navigation;

  /**
   * 电子书内容定位对象
   */
  locations: object;

  /**
   * 电子书样式主题对象
   */
  themes: Themes;

  /**
   * 阅读器上/下页控制状态
   */
  isReaderPageCtrlShown = false;

  isHeaderAndIndicatorShown = false;

  @ViewChild('readerWrapper', {static: true}) readerWrapperElement: ElementRef<HTMLDivElement>;

  private ebookInfoSub: Subscription;

  constructor(private readerCtrlService: ReaderCtrlService) {
  }

  ngOnInit(): void {
    this.ebookInfoSub = this.readerCtrlService.currentBookInfo.subscribe(ebookInfo => {
      const ebookFilePath = `${AppConfig.baseUrl}${ebookInfo.bookOpfUrl}`;
      this.onLoadingBook(ebookFilePath);
    });

    this.onBookPaginationAnalysis();

    this.onBookContentsNavigationAnalysis();
  }

  ngOnDestroy(): void {
    this.ebookInfoSub.unsubscribe();
  }

  /**
   * 显示/隐藏章节跳转控制
   * @param event 鼠标事件
   */
  onToggleChapterCtrl(event: MouseEvent) {
    this.isReaderPageCtrlShown = !this.isReaderPageCtrlShown;
  }

  /**
   * 显示/隐藏顶栏和进度指示器
   */
  onToggleHeaderAndIndicator() {
    this.isHeaderAndIndicatorShown = !this.isHeaderAndIndicatorShown;
    this.readerCtrlService.toggleHeaderAndIndicator.next(this.isHeaderAndIndicatorShown);
  }

  /**
   * 上一页
   */
  onPagePrev() {
    if (this.rendition && this.isReaderPageCtrlShown) {
      this.rendition.prev();
    }
  }

  /**
   * 下一页
   */
  onPageNext() {
    if (this.rendition && this.isReaderPageCtrlShown) {
      this.rendition.next();
    }
  }

  /**
   * 加载电子书并渲染到页面
   * @param ebookUrl 电子书 OPF 索引文件URL
   */
  onLoadingBook(ebookUrl: string) {
    this.ebook = new Book(ebookUrl);
    if (this.ebook) {
      console.log('onLoadingBook', this.ebook);
      this.rendition = this.ebook.renderTo('reader-content', {
        width: '100%',
        height: '100%'
      });
      this.rendition.display();
    }
  }

  /**
   * 解析电子书分页
   */
  onBookPaginationAnalysis() {
    const width = this.readerWrapperElement.nativeElement.clientWidth;
    console.log('onBookPaginationAnalysis', width);
    this.readerCtrlService.onBookPaginationAnalysis(this.ebook, 16, width).subscribe(
      locations => {
        console.log('onBookPaginationAnalysis', locations);
        this.locations = locations;
      },
      error => {
      },
      () => {
        console.log('onBookPaginationAnalysis Done');
      });
  }

  /**
   * 解析电子书目录列表
   */
  onBookContentsNavigationAnalysis() {
    this.readerCtrlService.onBookContentNavigationAnalysis(this.ebook).subscribe(
      nav => console.log('onBookContentsNavigationAnalysis', nav),
      error => {
      },
      () => {
        console.log('onBookContentsNavigationAnalysis Done')
      });
  }
}
