import { SyncOptionDescription } from './../../../enums/sync-option-description.enum';
import { SyncOption } from './../../../enums/sync-option.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-sync',
  templateUrl: './option-sync.component.html',
  styleUrls: ['./option-sync.component.scss']
})
export class OptionSyncComponent implements OnInit {

  /**
   * 同步选项 指代值
   */
  syncOptionValue: number;
  /**
   * 同步选项 选项描述
   */
  syncOptionDescription: string;

  /**
   * 同步选项列表
   */
  syncOptionList: Array<{ label: string, value: SyncOption }> = [
    {label: 'Auto', value: SyncOption.SYNC_ON_AUTO},
    {label: 'On Chapter Changed', value: SyncOption.SYNC_ON_CHAPTER_CHANGED},
    {label: 'On eBook Closed', value: SyncOption.SYNC_ON_BOOK_CLOSED},
    {label: '1 Min', value: SyncOption.SYNC_ON_MINUTE_ONE},
    {label: '3 Min', value: SyncOption.SYNC_ON_MINUTE_THREE},
    {label: '5 Min', value: SyncOption.SYNC_ON_MINUTE_FIVE},
    {label: '10 Min', value: SyncOption.SYNC_ON_MINUTE_TEN},
    {label: 'Manually', value: SyncOption.SYNC_ON_MANUAL}
  ];

  constructor() { }

  ngOnInit(): void {
    this.syncOptionValue = SyncOption.SYNC_ON_AUTO;
    this.onsyncOptionSwitching(SyncOption.SYNC_ON_AUTO);
  }

  onSyncOptionChanged(event: SyncOption): void {
    console.log('onSyncOptionChanged:', event);
    this.onsyncOptionSwitching(event);
  }

  onsyncOptionSwitching(syncOption: SyncOption): void {
    switch (syncOption) {
      case SyncOption.SYNC_ON_AUTO:
        this.syncOptionDescription = SyncOptionDescription.SYNC_DESCRIPTION_AUTO;
        break;
      case SyncOption.SYNC_ON_BOOK_CLOSED:
        this.syncOptionDescription = SyncOptionDescription.SYNC_DESCRIPTION_ON_BOOK_CLOSED;
        break;
      case SyncOption.SYNC_ON_CHAPTER_CHANGED:
        this.syncOptionDescription = SyncOptionDescription.SYNC_DESCRIPTION_ON_CHAPTER_CHANGED;
        break;
      case SyncOption.SYNC_ON_MANUAL:
        this.syncOptionDescription = SyncOptionDescription.SYNC_DESCRIPTION_MANUAL;
        break;
      case SyncOption.SYNC_ON_MINUTE_FIVE:
        this.syncOptionDescription = SyncOptionDescription.SYNC_DESCRIPTION_ON_MINUTE_FIVE;
        break;
      case SyncOption.SYNC_ON_MINUTE_ONE:
        this.syncOptionDescription = SyncOptionDescription.SYNC_DESCRIPTION_ON_MINUTE_ONE;
        break;
      case SyncOption.SYNC_ON_MINUTE_TEN:
        this.syncOptionDescription = SyncOptionDescription.SYNC_DESCRIPTION_ON_MINUTE_TEN;
        break;
      case SyncOption.SYNC_ON_MINUTE_THREE:
        this.syncOptionDescription = SyncOptionDescription.SYNC_DESCRIPTION_ON_MINUTE_THREE;
        break;
      default:
        this.syncOptionDescription = 'Please Chose a Sync Strategy...';
        break;
    }
  }
}
