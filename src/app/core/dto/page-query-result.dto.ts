export interface PageQueryResultDto<T> {
  total: number,
  size: number,
  current: number,
  pages: number
  records: Array<T>
}
