import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private navRouter: Router) { }

  ngOnInit(): void {
    // 指定进入主页时起始页面为 '最近阅读' 页面
    this.navRouter.navigateByUrl('/main/recent_reading');
    // this.navRouter.navigateByUrl('/main/library');
  }

}
