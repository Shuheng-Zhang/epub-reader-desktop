import {ReadingBook} from '../../../core/entity';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reading-list-container',
  templateUrl: './reading-list-container.component.html',
  styleUrls: ['./reading-list-container.component.scss']
})
export class ReadingListContainerComponent implements OnInit {

  readingBookList: Array<ReadingBook> = []

  constructor() {
  }

  ngOnInit(): void {
    this.readingBookList = [
      ...this.readingBookList,
      {
        id: '1000',
        ebookCoverUrl: '/10000/covers/5e0c343784f24368b690ebb46bdabbea.jpg',
        ebookTitle: '爱丽丝永恒花园',
        ebookAuthors: '七夕八幡',
        readingChapterTitle: '第01章 缘起',
        readingProgress: '08',
        readingChapterIndex: 'cfi:/book/a/10/!index.html#001',
        readingLatestTime: '2021-04-10 22:15:35'
      },
      {
        id: '10000',
        ebookCoverUrl: '/10000/covers/5e0c343784f24368b690ebb46bdabbea.jpg',
        ebookTitle: '爱丽丝永恒花园',
        ebookAuthors: '七夕八幡',
        readingChapterTitle: '第01章 缘起',
        readingProgress: '55',
        readingChapterIndex: 'cfi:/book/a/10/!index.html#001',
        readingLatestTime: '2021-04-10 22:15:35'
      },
      {
        id: '10001',
        ebookTitle: '超级纨绔',
        ebookAuthors: '左妻右妾',
        readingChapterTitle: '第02章 纨绔',
        readingProgress: '60',
        readingChapterIndex: 'cfi:/book/a/10/!index.html#001',
        readingLatestTime: '2021-04-01 17:35:45'
      },
      {
        id: '10003',
        ebookTitle: '超级纨绔',
        ebookAuthors: '左妻右妾',
        readingChapterTitle: '第02章 纨绔',
        readingProgress: '100',
        readingChapterIndex: 'cfi:/book/a/10/!index.html#001',
        readingLatestTime: '2021-04-01 17:35:45'
      }
    ]
  }

}
