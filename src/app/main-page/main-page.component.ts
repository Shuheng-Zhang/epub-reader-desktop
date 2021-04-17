import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MainPageCtrlService} from "../services/local/main-page-ctrl.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private navRouter: Router, private mainPageCtrlService: MainPageCtrlService) {
  }

  ngOnInit(): void {

    const isFirstTimeLoaded = this.mainPageCtrlService.getState('isFirstTimeLoaded');
    // 指定进入主页时起始页面为 '最近阅读' 页面
    if (isFirstTimeLoaded) {
      this.mainPageCtrlService.setState('isFirstTimeLoaded', false);
      this.navRouter.navigateByUrl('/main/recent_reading');
    }
    // this.navRouter.navigateByUrl('/main/library');
  }

}
