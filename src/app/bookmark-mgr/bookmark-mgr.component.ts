import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-mgr',
  templateUrl: './bookmark-mgr.component.html',
  styleUrls: ['./bookmark-mgr.component.scss']
})
export class BookmarkMgrComponent implements OnInit {

  isNoEbookSelected = false;

  constructor() { }

  ngOnInit(): void {
  }

}
