import {GeneralBookmark} from '../../../core/entity';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bookmark-list-container',
  templateUrl: './bookmark-list-container.component.html',
  styleUrls: ['./bookmark-list-container.component.scss']
})
export class BookmarkListContainerComponent implements OnInit {

  bookmarkList: Array<GeneralBookmark> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.bookmarkList = [
      ...this.bookmarkList,
      {
        id: '10000',
        bookmarkTitle: '第001章 初见',
        bookmarkCreatedTime: '2021-01-01 14:05:56',
        bookmarkLocationContent: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.',
        bookmarkLocationIndex: 'cfi:/01/a/3398/index.html|test'
      },
      {
        id: '10001',
        bookmarkTitle: 'Chapter 01 Meeting',
        bookmarkCreatedTime: '2021-02-01 18:05:56',
        bookmarkLocationContent: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.',
        bookmarkLocationIndex: 'cfi:/01/a/3398/index.html|test'
      },
      {
        id: '10002',
        bookmarkTitle: '第一章 Mi story',
        bookmarkCreatedTime: '2021-01-01 14:05:56',
        bookmarkLocationContent: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.',
        bookmarkLocationIndex: 'cfi:/01/a/3398/index.html|test'
      },
      {
        id: '10003',
        bookmarkTitle: '第001章 初见',
        bookmarkCreatedTime: '2021-01-01 14:05:56',
        bookmarkLocationContent: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.',
        bookmarkLocationIndex: 'cfi:/01/a/3398/index.html|test'
      },
      {
        id: '10004',
        bookmarkTitle: '第001章 初见',
        bookmarkCreatedTime: '2021-01-01 14:05:56',
        bookmarkLocationContent: 'Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.',
        bookmarkLocationIndex: 'cfi:/01/a/3398/index.html|test'
      },
    ];
  }

}
