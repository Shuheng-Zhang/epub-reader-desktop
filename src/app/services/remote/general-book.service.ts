import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PageQueryDto} from "../../core/dto/page-query.dto";
import {AppConfig} from '../../../environments/environment';
import {CommResDataDto} from "../../core/dto";
import {GeneralBook} from "../../core/entity";
import {Subject} from "rxjs";
import {PageQueryResultDto} from "../../core/dto/page-query-result.dto";
import {ReqParamsDto} from "../../core/dto/req-params.dto";

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
    let result = new Subject<CommResDataDto<PageQueryResultDto<GeneralBook>>>();
    this.httpClient.post<CommResDataDto<PageQueryResultDto<GeneralBook>>>(`${AppConfig.apiUrl}/book/list`, queryParams)
      .subscribe(res => {
        result.next(res);
      });
    return result;
  }

  /**
   * 获取单一电子书信息
   * @param bookId 电子书ID
   */
  fetchOneBook(bookId: string) {
    const result = new Subject<CommResDataDto<GeneralBook>>();
    let params: ReqParamsDto<string> = {
      'bookId': bookId
    }
    this.httpClient.post<CommResDataDto<GeneralBook>>(`${AppConfig.apiUrl}/book/findOne`, params)
      .subscribe(res => {
        console.log('fetchOneBook', res);
        result.next(res);
      })
    return result;
  }
}
