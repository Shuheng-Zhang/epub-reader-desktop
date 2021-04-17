import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-option-caches',
  templateUrl: './option-caches.component.html',
  styleUrls: ['./option-caches.component.scss']
})
export class OptionCachesComponent implements OnInit {

  /**
   * 缓存目录路径
   */
  cacheDirPath = '/Users/heng/ePubReader/caches';

  /**
   * 可用存储空间
   */
  usableFreeSpace = '16.6 GB';

  /**
   * 电子阅读档占用空间
   */
  epubUsedSpace = '233.3 MB';

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * 配置缓存路径
   * todo：实现文件夹选择及路径数据存储
   */
  onDirectoryDialogOpened() {
    console.log('onDirectoryDialogOpened Clicked');
  }

}
