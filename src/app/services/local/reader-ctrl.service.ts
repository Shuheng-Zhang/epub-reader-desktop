import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {RecentReadingBook} from "../../core/entity";
import {Router} from "@angular/router";
import {Book} from "epubjs";
import {fromPromise} from "rxjs/internal-compatibility";
import {map} from "rxjs/operators";
import {CommResDataDto, GeneralBookDto, GeneralBookSimpleDto, PageQueryResultDto} from "../../core/dto";

@Injectable({
  providedIn: 'root'
})
export class ReaderCtrlService {

  constructor(private navRouter: Router) {
  }


  /**
   * 阅读器标题栏及进度栏控制
   */
  toggleHeaderAndIndicator = new Subject<boolean>();

  /**
   * 阅读器当前电子书对象
   */
  currentBookInfo = new BehaviorSubject<GeneralBookDto>(null);

  /**
   * 打开指定电子书
   * @param bookInfo 电子书数据对象
   */
  onBookOpened(bookInfo: GeneralBookDto | GeneralBookSimpleDto) {
    this.navRouter.navigate(['/', 'epub_reader']).then(() => {
      this.currentBookInfo.next(bookInfo);
    });
  }

  /**
   * 电子书分页分析
   * @param currentBook 当前电子书实例
   * @param fontSize 字号
   * @param contentWidth 内容页面宽度
   */
  onBookPaginationAnalysis(currentBook: Book, fontSize: number, contentWidth: number) {
    if (!currentBook) {
      return null;
    }
    /**
     * 默认单页字符数
     */
    const DEFAULT_CHARACTERS = 375;
    /**
     * 默认字体大小
     */
    const DEFAULT_FONT_SIZE_BASE = 16;

    return fromPromise(currentBook.ready
      .then(
        () => currentBook.locations.generate(
          DEFAULT_CHARACTERS * (contentWidth / DEFAULT_CHARACTERS) * (fontSize / DEFAULT_FONT_SIZE_BASE))
      )
    );
  }

  /**
   * 电子书目录导航分析
   * @param currentBook 当前电子书实例
   */
  onBookContentNavigationAnalysis(currentBook: Book) {
    if (!currentBook) {
      return null;
    }

    return fromPromise(currentBook.loaded.navigation)
      .pipe(
        map(nav => nav.toc),
      );
  }
}
