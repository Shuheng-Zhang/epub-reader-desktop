import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-space',
  templateUrl: './placeholder-space.component.html',
  styleUrls: ['./placeholder-space.component.scss']
})
export class PlaceholderSpaceComponent implements OnInit {

  @Input() height = '100%';

  constructor() { }

  ngOnInit(): void {
  }

}
