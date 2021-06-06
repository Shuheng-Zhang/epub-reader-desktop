import {Injectable} from "@angular/core";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {DbStoreNameEnum} from "../../core/enums";

@Injectable({
  providedIn: 'root'
})
export class AppDbService {

  constructor(private dbService: NgxIndexedDBService) {
  }

  // 用户账号信息
  configAppAccountInfo(accountId: string, accountName: string, accountToken?: string) {
    this.dbService.getByID(DbStoreNameEnum.ACCOUNT_USER, accountId).subscribe(res => {
      if (res !== null) {
        console.log('configAppAccountInfo Existed', res);
        return;
      }
      this.dbService.add(DbStoreNameEnum.ACCOUNT_USER, {
        accountId: accountId,
        userName: accountName,
        userToken: accountToken
      }).subscribe(key => {
        console.log('configAppAccountInfo', key);
      });
    });
  }
  getAppAccountInfo() {
    return this.dbService.getAll(DbStoreNameEnum.ACCOUNT_USER);
  }

  // 正在阅读信息
  configReadingBookInfo(bookId: string, currentProgressIndex?: string, coverUrl?: string, bookFileUrl?: string) {
    this.dbService.add(DbStoreNameEnum.READING_BOOKS, {
      bookId,
      currentProgressIndex,
      coverUrl,
      bookFileUrl
    }).subscribe(key => {
      console.log('configReadingBookInfo', key);
    });
  }
  removeReadingBookInfo(bookId: string) {
    this.dbService.delete(DbStoreNameEnum.READING_BOOKS, bookId).subscribe(res => {
      console.log('removeReadingBookInfo', res);
    });
  }
  getReadingBookInfo(bookId: string) {
    return this.dbService.getByID(DbStoreNameEnum.READING_BOOKS, bookId);
  }

  // 应用配置
  configAppConfInfo(configId: string, configItem?: { configKey: string, configValue: number | string }) {
    this.dbService.getByID(DbStoreNameEnum.APP_CONFIG, configId).subscribe(res => {
      if (res === null || res === undefined) {
        this.dbService.add(DbStoreNameEnum.APP_CONFIG, configItem).subscribe(key => {
          console.log('configAppConfInfo New', key);
        });
      } else {
        this.dbService.update(DbStoreNameEnum.APP_CONFIG, configItem).subscribe(key => {
          console.log('configAppConfInfo Update', key);
        });
      }
    });
  }
  getAppConfInfo(configId: string) {
    return this.dbService.getByID(DbStoreNameEnum.APP_CONFIG, configId);
  }

  // 移除应用数据
  cleanup() {
    this.dbService.deleteDatabase().subscribe(res => {
      console.log('cleanup', res);
    });
  }
}
