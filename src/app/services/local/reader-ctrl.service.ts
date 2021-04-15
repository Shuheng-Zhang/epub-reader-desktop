import { Book } from 'epubjs';
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ReaderCtrlService {
    /**
     * 阅读器标题栏及进度栏控制
     */
    toggleHeaderAndIndicator = new Subject<boolean>();

}