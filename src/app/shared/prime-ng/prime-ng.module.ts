import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
  ],
  exports: [
    MenuModule
  ]
})
export class PrimeNgModule { }
