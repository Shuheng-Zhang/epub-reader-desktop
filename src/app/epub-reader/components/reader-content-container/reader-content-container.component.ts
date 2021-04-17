import {ReaderCtrlService} from '../../../services/local';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book, Rendition} from 'epubjs';
import {AppConfig} from '../../../../environments/environment';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-reader-content-container',
  templateUrl: './reader-content-container.component.html',
  styleUrls: ['./reader-content-container.component.scss']
})
export class ReaderContentContainerComponent implements OnInit, OnDestroy {

  ebook: Book;
  renderer: Rendition;

  isReaderCtrlShown = false;
  isHeaderAndIndicatorShown = false;

  private ebookInfoSub: Subscription;

  constructor(private readerCtrlService: ReaderCtrlService) {
  }

  ngOnInit(): void {
    this.ebookInfoSub = this.readerCtrlService.currentBookInfo.subscribe(ebookInfo => {
      const ebookFilePath = `${AppConfig.baseUrl}${ebookInfo.bookFileUrl}`;
      this.onLoadingBook(ebookFilePath);
    });
  }

  ngOnDestroy(): void {
    this.ebookInfoSub.unsubscribe();
  }

  /**
   * 显示/隐藏章节跳转控制
   * @param event 鼠标事件
   */
  onToggleChapterCtrl(event: MouseEvent) {
    this.isReaderCtrlShown = !this.isReaderCtrlShown;
  }

  /**
   * 显示/隐藏顶栏和进度指示器
   */
  onToggleHeaderAndIndicator() {
    this.isHeaderAndIndicatorShown = !this.isHeaderAndIndicatorShown;
    this.readerCtrlService.toggleHeaderAndIndicator.next(this.isHeaderAndIndicatorShown);
  }

  onChapterPrev() {
    if (this.renderer && this.isReaderCtrlShown) {
      this.renderer.prev();
    }
  }

  onChapterNext() {
    if (this.renderer && this.isReaderCtrlShown) {
      this.renderer.next();
    }
  }

  onLoadingBook(ebookUrl: string) {
    this.ebook = new Book(ebookUrl);
    if (this.ebook) {
      this.renderer = this.ebook.renderTo('reader-content', {
        width: '100%',
        height: '100%'
      });
      this.renderer.display();
    }
  }
}
