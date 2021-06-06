import {ReaderCtrlService} from '../services/local';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-epub-reader',
  templateUrl: './epub-reader.component.html',
  styleUrls: ['./epub-reader.component.scss']
})
export class EpubReaderComponent implements OnInit, OnDestroy {
  private readerHeaderAndIndicatorCtrlSub: Subscription;

  /**
   * 标题栏及进度指示器显示状态
   */
  isHeaderAndIndicatorShown = false;

  constructor(private readerCtrlService: ReaderCtrlService) {
  }

  ngOnInit(): void {
    this.readerHeaderAndIndicatorCtrlSub = this.readerCtrlService.toggleHeaderAndIndicator.subscribe(state => {
      this.isHeaderAndIndicatorShown = state;
    });
  }

  ngOnDestroy(): void {
    this.readerHeaderAndIndicatorCtrlSub.unsubscribe();
  }

}
