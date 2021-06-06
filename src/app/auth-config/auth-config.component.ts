import { Component, OnInit } from '@angular/core';
import {AppDbService} from "../services/local";
import {Router} from "@angular/router";
import {AppConfigEnum} from "../core/enums/app-config-enum";
import {filter, flatMap, merge} from "rxjs/operators";
import {of} from "rxjs";

@Component({
  selector: 'app-auth-config',
  templateUrl: './auth-config.component.html',
  styleUrls: ['./auth-config.component.scss']
})
export class AuthConfigComponent implements OnInit {

  constructor(private navRoute: Router, private dbService: AppDbService) { }

  ngOnInit(): void {
    /*this.dbService.getAppAccountInfo().subscribe(account => {
      if (account.length !== 0) {
        this.navRoute.navigate(['/', 'main']);
      }
    });*/

    this.dbService.getAppConfInfo(AppConfigEnum.APP_CONFIG_API_URL).subscribe(apiUrl => {
      console.log('appConfig-apiUrl', apiUrl);
      if (apiUrl.code !== 200) {
        this.navRoute.navigate(['/', 'auth']);
      }
    });

    /*this.dbService.getAppAccountInfo().pipe(
      // filter(auccount => account.accountType === 'user')
      filter(value => value.accountType === 'user')
    )*/
  }
}
