import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MainPageCtrlService {
  /**
   * 主页面状态
   * @private
   */
  private state = {
    /**
     * 页面首次加载
     */
    isFirstTimeLoaded: true
  }

  getState(key: string) {
    return this.state[key];
  }
  setState(key: string, value: any) {
    this.state[key] = value;
  }
}
