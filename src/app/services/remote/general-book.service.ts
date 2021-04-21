import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PageQueryDto} from "../../core/dto/page-query.dto";
import {AppConfig} from '../../../environments/environment';
import {CommResDataDto} from "../../core/dto";
import {GeneralBook, RecentReadingBook} from "../../core/entity";
import {PageQueryResultDto} from "../../core/dto/page-query-result.dto";

@Injectable({
  providedIn: "root"
})
export class GeneralBookService {
  constructor(private httpClient: HttpClient) {
  }

  /**
   * 查询电子书列表
   * @param queryParams 查询条件
   *
   * - queryParams.requests.accountId (必要) - 用户账号ID
   *
   * - queryParams.currentPage (可选) - 目标页码
   *
   * - queryParams.limit (可选) - 数据集单次容量上限
   */
  fetchBooks(queryParams: PageQueryDto<string>) {
    return this.httpClient.post<CommResDataDto<PageQueryResultDto<GeneralBook>>>(`${AppConfig.apiUrl}/book/list`, queryParams);
  }

  /**
   * 查询用户最近阅读信息
   * @param accountId 用户账号ID
   */
  fetchRecentReadingBooks(accountId: string) {
    return this.httpClient.post<CommResDataDto<Array<RecentReadingBook>>>(`${AppConfig.apiUrl}/book/list/recent`, {accountId: accountId});
  }
}
