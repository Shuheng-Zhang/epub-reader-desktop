import {GeneralBook} from '../../../core/entity';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ebook-info-grid-container',
  templateUrl: './ebook-info-grid-container.component.html',
  styleUrls: ['./ebook-info-grid-container.component.scss']
})
export class EbookInfoGridContainerComponent implements OnInit {
  @Input() ebookList: GeneralBook[]

  constructor() {
  }

  ngOnInit(): void {
  }

  onLoadingMore() {
    console.log('eBook Loading More Clicked');
  }
}
