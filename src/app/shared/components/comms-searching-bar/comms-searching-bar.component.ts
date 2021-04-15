import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comms-searching-bar',
  templateUrl: './comms-searching-bar.component.html',
  styleUrls: ['./comms-searching-bar.component.scss']
})
export class CommsSearchingBarComponent implements OnInit {

  @Input() helpContent = 'Type for Searching...';

  @Input() width = '200px';

  @Input() height = '32px';

  searchingInput = ''

  constructor() { }

  ngOnInit(): void {
  }

}
