import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainPageCtrlService {

  /**
   * 主页首次加载状态
   */
  isFirstTimeLoaded = new BehaviorSubject<boolean>(true);
}
