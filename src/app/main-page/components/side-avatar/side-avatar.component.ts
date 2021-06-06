import {Component, Input, OnInit} from '@angular/core';
import {AppDbService} from "../../../services/local";

@Component({
  selector: 'app-side-avatar',
  templateUrl: './side-avatar.component.html',
  styleUrls: ['./side-avatar.component.scss']
})
export class SideAvatarComponent implements OnInit {

  @Input() avatarWidth = '240px';
  @Input() avatarHeight = '240px';

  accountName = 'Hello World';

  constructor(private dbService: AppDbService) {
  }

  ngOnInit(): void {
    /*this.dbService.getAppAccountInfo().subscribe(account => {
      console.log('accountInfo', account);
      this.accountName = account[0].userName;
    });*/
  }

}
