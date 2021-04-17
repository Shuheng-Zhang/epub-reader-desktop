/**
 * 通用 HTTP 响应数据结构体
 */
export interface CommResDataDto<T> {
  /**
   * 状态码
   */
  code: number,
  /**
   * 响应信息
   */
  msg: string,
  /**
   * 响应数据
   */
  data: T
}
