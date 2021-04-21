import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PageQueryDto} from "../../core/dto";
import {GeneralBookmark} from "../../core/entity";
import {CommResDataDto} from "../../core/dto";
import {PageQueryResultDto} from "../../core/dto";
import { AppConfig } from '../../../environments/environment';
@Injectable({
  providedIn: "root"
})
export class GeneralBookmarkService {
  constructor(private httpClient: HttpClient) {
  }

  /**
   * 查询指定电子书书签信息
   * @param queryParams
   */
  fetchBookmark(queryParams: PageQueryDto<string>) {
    return this.httpClient.post<CommResDataDto<PageQueryResultDto<GeneralBookmark>>>(`${AppConfig.apiUrl}/bookmark/list`, queryParams);
  }

}
