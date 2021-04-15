import { ReaderCtrlService } from './../services/local/reader-ctrl.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-epub-reader',
  templateUrl: './epub-reader.component.html',
  styleUrls: ['./epub-reader.component.scss']
})
export class EpubReaderComponent implements OnInit, OnDestroy {

  private readerCtrlSub: Subscription;
  isHeaderAndIndicatorShown = false;

  constructor(private readerCtrlService: ReaderCtrlService) { }

  ngOnInit(): void {
    this.readerCtrlSub = this.readerCtrlService.toggleHeaderAndIndicator.subscribe(state => {
      this.isHeaderAndIndicatorShown = state;
    });
  }

  ngOnDestroy(): void {
    this.readerCtrlSub.unsubscribe();
  }

  // toggleHeaderAndIndicator() {
  //   this.isHeaderAndIndicatorShown = !this.isHeaderAndIndicatorShown;
  // }
}
