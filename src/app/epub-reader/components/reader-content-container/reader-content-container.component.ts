import { ReaderCtrlService } from './../../../services/local/reader-ctrl.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {Book, Rendition} from 'epubjs';
import { AppConfig } from '../../../../environments/environment';


@Component({
  selector: 'app-reader-content-container',
  templateUrl: './reader-content-container.component.html',
  styleUrls: ['./reader-content-container.component.scss']
})
export class ReaderContentContainerComponent implements OnInit, OnDestroy {

  ebookFileUrl: string;
  ebook: Book;
  renderer: Rendition;

  isReaderCtrlShown = false;
  isHeaderAndIndicatorShown = false;

  constructor(private readerCtrlService: ReaderCtrlService) { }

  ngOnInit(): void {

    this.onLoadingBook(`${AppConfig.baseUrl}/10000/df1025ce6785481897d3ca7c5c0f25bd.epub`);
  }

  ngOnDestroy(): void {

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
