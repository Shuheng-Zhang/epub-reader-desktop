import {Injectable} from "@angular/core";
import {BehaviorSubject, Subject} from "rxjs";
import {GeneralBook} from "../../core/entity";

@Injectable({
  providedIn: 'root'
})
export class ReaderCtrlService {

  /**
   * 阅读器标题栏及进度栏控制
   */
  toggleHeaderAndIndicator = new Subject<boolean>();

  /**
   * 阅读器当前电子书信息
   */
  currentBookInfo = new BehaviorSubject<GeneralBook>(null);
}
