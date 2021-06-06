/**
 * 数据传输对象 电子书对象信息
 */
export interface GeneralBookDto {
  /**
   * ID
   */
  id: string,
  /**
   * 电子书标题
   */
  bookTitle?: string,
  /**
   * 电子书作者
   */
  bookAuthors?: string,
  /**
   * 电子书简介
   */
  bookDescription?: string,
  /**
   * 电子书容量
   */
  bookSize?: string,
  /**
   * 电子书收录时间
   */
  bookPushedTime?: string,
  /**
   * 电子书封面URL
   */
  bookCoverUrl?: string,
  /**
   * 电子书 OPF 文件URL
   */
  bookOpfUrl?: string,
  /**
   * 电子书文件URL
   */
  bookFileUrl?: string
}
