import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-side-avatar',
  templateUrl: './side-avatar.component.html',
  styleUrls: ['./side-avatar.component.scss']
})
export class SideAvatarComponent implements OnInit {

  @Input() avatarWidth = '240px';
  @Input() avatarHeight = '240px';

  @Input() accountName = 'Hello World'

  constructor() {
  }

  ngOnInit(): void {
  }

}
