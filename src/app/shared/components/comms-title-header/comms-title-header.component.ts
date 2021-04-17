import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comms-title-header',
  templateUrl: './comms-title-header.component.html',
  styleUrls: ['./comms-title-header.component.scss']
})
export class CommsTitleHeaderComponent implements OnInit {

  @Input() headerWidth = '300px';
  @Input() headerHeight = '48px';
  @Input() headerTitle = 'Untitled'
  @Input() titleFontSize = '20px';

  constructor() {
  }

  ngOnInit(): void {
  }

}
