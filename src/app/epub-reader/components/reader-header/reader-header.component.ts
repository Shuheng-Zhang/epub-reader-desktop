import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reader-header',
  templateUrl: './reader-header.component.html',
  styleUrls: ['./reader-header.component.scss']
})
export class ReaderHeaderComponent implements OnInit {

  ebookTitle = 'Untitled';

  constructor() { }

  ngOnInit(): void {
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
