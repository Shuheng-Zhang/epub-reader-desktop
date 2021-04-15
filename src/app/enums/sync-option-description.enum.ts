/**
 * 同步选项描述
 * @enum
 */
export enum SyncOptionDescription {
    SYNC_DESCRIPTION_ON_BOOK_CLOSED = 'Synchronizing Reading Process on Closing Book.',
    SYNC_DESCRIPTION_ON_MINUTE_ONE = 'Synchronizing Reading Process on Every Minute.',
    SYNC_DESCRIPTION_ON_MINUTE_THREE = 'Synchronizing Reading Process on Every 3 Minutes.',
    SYNC_DESCRIPTION_ON_MINUTE_FIVE = 'Synchronizing Reading Process on Every 5 Minutes.',
    SYNC_DESCRIPTION_ON_MINUTE_TEN = 'Synchronizing Reading Process on Every 10 Minutes.',
    SYNC_DESCRIPTION_ON_CHAPTER_CHANGED = 'Synchronizing Reading Process on Changing Chapter.',
    SYNC_DESCRIPTION_AUTO = 'Synchronizing Reading Process on Changing Chapter, Every 3 Minutes and Closing Book.',
    SYNC_DESCRIPTION_MANUAL = 'Synchronizing Reading Process on Clicking <Synchronize> Buton by User Manually.'
}