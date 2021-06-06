import {Component, OnInit} from '@angular/core';
import {RecentReadingBook} from '../../../core/entity';
import {GeneralBookService} from "../../../services/remote";
import {CommResStatEnum} from "../../../core/enums/comm-res-stat.enum";

@Component({
  selector: 'app-reading-list-container',
  templateUrl: './reading-list-container.component.html',
  styleUrls: ['./reading-list-container.component.scss']
})
export class ReadingListContainerComponent implements OnInit {

  readingBookList: RecentReadingBook[] = []

  constructor(private bookService: GeneralBookService) {
  }

  ngOnInit(): void {
    this.fetchRecentReadingBookList();

  }


  private fetchRecentReadingBookList(): void {
    this.bookService.fetchRecentReadingBooks('10000')
      .subscribe(respData => {
        if (CommResStatEnum.OK === respData.code) {
          console.log('fetchRecentReadingBooks', respData);
          this.readingBookList = [...this.readingBookList, ...respData.data];
        }
      })
  }
}
