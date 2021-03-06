import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GeneralBookDto, GeneralBookSimpleDto, PageQueryDto} from "../../core/dto";
import {AppConfig} from '../../../environments/environment';
import {CommResDataDto} from "../../core/dto";
import {GeneralBookSimple, RecentReadingBook} from "../../core/entity";
import {PageQueryResultDto} from "../../core/dto";

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
   * - queryParams.requests.title (可选) - 标题查询
   *
   * - queryParams.requests.authors (可选) - 作者查询
   *
   * - queryParams.currentPage (可选) - 目标页码
   *
   * - queryParams.limit (可选) - 数据集单次容量上限
   */
  fetchBooks(queryParams: PageQueryDto<string>) {
    return this.httpClient.post<CommResDataDto<PageQueryResultDto<GeneralBookDto>>>(`${AppConfig.apiUrl}/book/list`, queryParams);
  }

  /**
   * 查询电子书简易信息列表
   * @param queryParams 查询条件
   *
   * - queryParams.requests.accountId (必要) - 用户账号ID
   *
   * - queryParams.requests.title (可选) - 标题查询
   *
   * - queryParams.requests.authors (可选) - 作者查询
   *
   * - queryParams.currentPage (可选) - 目标页码
   *
   * - queryParams.limit (可选) - 数据集单次容量上限
   */
  fetchBooksSimple(queryParams: PageQueryDto<string>) {
    return this.httpClient.post<CommResDataDto<PageQueryResultDto<GeneralBookSimpleDto>>>(`${AppConfig.apiUrl}/book/list_simple`, queryParams);
  }

  /**
   * 查询用户最近阅读信息
   * @param accountId 用户账号ID
   */
  fetchRecentReadingBooks(accountId: string) {
    return this.httpClient.post<CommResDataDto<Array<RecentReadingBook>>>(`${AppConfig.apiUrl}/book/list/recent`, {accountId: accountId});
  }

  /**
   * 查询用户包含书签的电子书信息
   * @param queryParams 查询条件
   *
   * - queryParams.requests.accountId (必要) - 用户账号ID
   *
   * - queryParams.currentPage (可选) - 目标页码
   *
   * - queryParams.limit (可选) - 数据集单次容量上限
   */
  fetchBookmarkContainedBooks(queryParams: PageQueryDto<string>) {
    return this.httpClient.post<CommResDataDto<PageQueryResultDto<GeneralBookSimple>>>(`${AppConfig.apiUrl}/book/list/bookmarkContained`, queryParams)
  }

}
