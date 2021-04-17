import {GeneralBookmark} from '../../../core/entity';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookmark-list-item',
  templateUrl: './bookmark-list-item.component.html',
  styleUrls: ['./bookmark-list-item.component.scss']
})
export class BookmarkListItemComponent implements OnInit {

  @Input() bookmarkEntity: GeneralBookmark;

  constructor() {
  }

  ngOnInit(): void {
  }

  onBookmarkSelected(): void {
    console.log('onBookmarkSelected', this.bookmarkEntity);
  }
}
