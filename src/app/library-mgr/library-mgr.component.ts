import {GeneralBook} from '../core/entity';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {GeneralBookService} from "../services/remote";
import {Subscription} from "rxjs";
import {PageQueryDto} from "../core/dto/page-query.dto";

@Component({
  selector: 'app-library-mgr',
  templateUrl: './library-mgr.component.html',
  styleUrls: ['./library-mgr.component.scss']
})
export class LibraryMgrComponent implements OnInit, OnDestroy {

  pages = 0;
  size = 0;
  current = 0;
  bookListSub: Subscription = null;

  ebookList: GeneralBook[] = [
    // 默认项: 新增电子书功能按键
    {id: null}
  ];

  constructor(private bookService: GeneralBookService) {
  }

  ngOnInit(): void {
    let queryParams: PageQueryDto<string> = {
      requests: {'accountId': '10000'}
    };
    this.bookListSub = this.bookService.fetchBooks(queryParams).subscribe(data => {
      console.log('LibraryMgrComponent bookList', data);
      this.pages = data.data.pages;
      this.size = data.data.size;
      this.current = data.data.current;
      this.ebookList = [...this.ebookList, ...data.data.records];
    });
  }

  ngOnDestroy(): void {
    this.bookListSub.unsubscribe();
  }
}
