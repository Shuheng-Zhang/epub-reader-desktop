import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ReaderCtrlService} from "../../../services/local/reader-ctrl.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reader-header',
  templateUrl: './reader-header.component.html',
  styleUrls: ['./reader-header.component.scss']
})
export class ReaderHeaderComponent implements OnInit, OnDestroy {

  private ebookInfoSub: Subscription;

  ebookTitle = 'Untitled';

  constructor(private navRouter: Router, private readerCtrlService: ReaderCtrlService) {
  }

  ngOnInit(): void {
    this.ebookInfoSub = this.readerCtrlService.currentBookInfo.subscribe(ebookInfo => {
      this.ebookTitle = ebookInfo.bookTitle;
    })
  }

  ngOnDestroy() {
    this.ebookInfoSub.unsubscribe();
  }

  onReaderExited() {
    this.navRouter.navigate(['/', 'main', 'library']);
  }

  onContentsPanelOpened(): void {
    console.log('onContentsPanelOpened Clicked');
  }

  onBookmarksPanelOpened(): void {
    console.log('onBookmarksPanelOpened Clicked');
  }

  onNotesPanelOpened(): void {
    console.log('onNotesPanelOpened Clicked');
  }

  onFontPanelOpened(): void {
    console.log('onFontConfigPanelOpened Clicked');
  }

  onThemesPanelOpened(): void {
    console.log('onThemesPanelOpened Clicked');
  }

  onSearchingPanelOpened(): void {
    console.log('hhhh');
    console.log('onSearchingPanelOpened Clicked');
  }
}
