import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {GeneralBook, RecentReadingBook} from "../../core/entity";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ReaderCtrlService {

  constructor(private navRouter: Router) {}


  /**
   * 阅读器标题栏及进度栏控制
   */
  toggleHeaderAndIndicator = new Subject<boolean>();

  /**
   * 阅读器当前电子书信息
   */
  currentBookInfo = new BehaviorSubject<GeneralBook>(null);

  /**
   * 打开指定电子书
   * @param bookInfo 电子书信息对象
   */
  onBookOpened(bookInfo: GeneralBook | RecentReadingBook) {
    this.navRouter.navigate(['/', 'epub_reader']).then(() => {
      this.currentBookInfo.next(bookInfo);
    });
  }
}
