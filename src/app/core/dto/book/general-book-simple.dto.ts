/**
 * 数据传输对象 电子书对象简易信息
 */
export interface GeneralBookSimpleDto {
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
   * 电子书封面URL
   */
  bookCoverUrl?: string,
  /**
   * 电子书 OPF 文件URL
   */
  bookOpfUrl?: string
}
