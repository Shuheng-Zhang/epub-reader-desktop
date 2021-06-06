import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NzIconModule} from 'ng-zorro-antd/icon';
import {IconDefinition} from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzFormModule} from 'ng-zorro-antd/form';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzIconModule.forRoot(icons),
    NzMenuModule,
    NzAvatarModule,
    NzInputModule,
    NzDividerModule,
    NzGridModule,
    NzPopoverModule,
    NzButtonModule,
    NzSwitchModule,
    NzSelectModule,
    NzEmptyModule,
    NzSliderModule,
    NzToolTipModule,
    NzFormModule
  ],
  exports: [
    NzIconModule,
    NzMenuModule,
    NzAvatarModule,
    NzInputModule,
    NzDividerModule,
    NzGridModule,
    NzPopoverModule,
    NzButtonModule,
    NzSwitchModule,
    NzSelectModule,
    NzEmptyModule,
    NzSliderModule,
    NzToolTipModule,
    NzFormModule
  ]
})
export class NgAntdModule {
}
