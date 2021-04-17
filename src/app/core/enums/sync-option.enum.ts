/**
 * 阅读同步选项
 * @enum
 * @property { number } SYNC_ON_BOOK_CLOSED
 * @property { number } SYNC_ON_MINIUTE_ONE
 * @property { number } SYNC_ON_MINIUTE_THREE
 * @property { number } SYNC_ON_MINIUTE_FIVE
 * @property { number } SYNC_ON_MINIUTE_TEN
 * @property { number } SYNC_ON_CHAPTER_CHANGED
 * @property { number } SYNC_ON_AUTO
 * @property { number } SYNC_ON_MANUAL
 */
export enum SyncOption {
  /**
     * 电子书关闭时同步
     */
  SYNC_ON_BOOK_CLOSED,
  /**
     * 每 1 分钟进行同步
     */
  SYNC_ON_MINUTE_ONE,
  /**
     * 每 3 分钟进行同步
     */
  SYNC_ON_MINUTE_THREE,
  /**
     * 每 5 分钟进行同步
     */
  SYNC_ON_MINUTE_FIVE,
  /**
     * 每 10 分钟进行同步
     */
  SYNC_ON_MINUTE_TEN,
  /**
     * 章节切换时同步
     */
  SYNC_ON_CHAPTER_CHANGED,
  /**
     * 自动同步
     *
     * - 当电子书关闭时同步
     *
     * - 当章节切换时同步
     *
     * - 每 3 分钟同步
     */
  SYNC_ON_AUTO,
  /**
     * 手动同步
     */
  SYNC_ON_MANUAL
}
