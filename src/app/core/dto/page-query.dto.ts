/**
 * 通用 HTTP 分页查询数据结构
 */
export interface PageQueryDto<T> {
  /**
   * 当前页码
   */
  currentPage?: number,
  /**
   * 数据集单次容量上限
   */
  limit?: number,
  /**
   * 请求参数键值对
   */
  requests?: { [key: string]: T }
}
