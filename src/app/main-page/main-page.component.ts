import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainPageCtrlService} from "../services/local";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  firstTimeLoadedSub: Subscription;

  constructor(private navRouter: Router, private mainPageCtrlService: MainPageCtrlService) {
  }

  ngOnInit(): void {

    // 获取主页加载状态
    // 首页加载过后不再重新定位到默认页面
    this.firstTimeLoadedSub = this.mainPageCtrlService.isFirstTimeLoaded.subscribe(loadState => {
      if (loadState) {
        this.navRouter.navigateByUrl('/main/recent_reading')
          .then(() => this.mainPageCtrlService.isFirstTimeLoaded.next(false));
      }
    });
  }

  ngOnDestroy(): void {
    this.firstTimeLoadedSub.unsubscribe();
  }
}
