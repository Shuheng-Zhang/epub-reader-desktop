import { GeneralBook } from './../../../entity/general-ebook.entity';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ebook-info-grid-container',
  templateUrl: './ebook-info-grid-container.component.html',
  styleUrls: ['./ebook-info-grid-container.component.scss']
})
export class EbookInfoGridContainerComponent implements OnInit {
  @Input() ebookList: GeneralBook[]
  @Input() isLoadingDone = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLoadingMore() {
    console.log('eBook Loading More Clicked');
  }
}
