import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor(private httpClient: HttpClient) {
  }

  /**
   * 检查系统根用户是否存在
   * @param apiServiceUrl 数据服务端URL
   */
  checkRootAccount(apiServiceUrl: string) {
    return this.httpClient.get(`${apiServiceUrl}/account/root/check`);
  }
}
