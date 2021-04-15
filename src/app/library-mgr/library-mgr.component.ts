import { GeneralBook } from './../entity/general-ebook.entity';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-mgr',
  templateUrl: './library-mgr.component.html',
  styleUrls: ['./library-mgr.component.scss']
})
export class LibraryMgrComponent implements OnInit {

  ebookLoadingDone = false;

  ebookList: GeneralBook[] = [
    // 默认项: 新增电子书功能按键
    {
      id: null
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.ebookList = [...this.ebookList,
    {
      id: 'b90d7dc343724d49a920d101288843e4',
      bookTitle: '爱丽丝永恒花园',
      bookAuthors: '七夕八幡, ',
      bookDescription: '称为爱丽丝永恒花园，庭院中却只有一两株野花。名为爱丽丝的哥特萝莉，却已然在这里存在了千年。遵循十规则，交易着人类或美好或丑陋的愿望。白夜，作为爱丽丝钦定的助手，也成为了唯一见证这一切幻与灭的人类。',
      bookCoverUrl: null,
      bookFileUrl: '/10000/df1025ce6785481897d3ca7c5c0f25bd.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: 'b90d7dc343724d49a920d101288843e4',
      bookTitle: '爱丽丝永恒花园',
      bookAuthors: '七夕八幡, ',
      bookDescription: '称为爱丽丝永恒花园，庭院中却只有一两株野花。名为爱丽丝的哥特萝莉，却已然在这里存在了千年。遵循十规则，交易着人类或美好或丑陋的愿望。白夜，作为爱丽丝钦定的助手，也成为了唯一见证这一切幻与灭的人类。',
      bookCoverUrl: '/10000/covers/5e0c343784f24368b690ebb46bdabbea.jpg',
      bookFileUrl: '/10000/df1025ce6785481897d3ca7c5c0f25bd.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: 'b90d7dc343724d49a920d101288843e4',
      bookTitle: '爱丽丝永恒花园',
      bookAuthors: '七夕八幡, ',
      bookDescription: '称为爱丽丝永恒花园，庭院中却只有一两株野花。名为爱丽丝的哥特萝莉，却已然在这里存在了千年。遵循十规则，交易着人类或美好或丑陋的愿望。白夜，作为爱丽丝钦定的助手，也成为了唯一见证这一切幻与灭的人类。',
      bookCoverUrl: '/10000/covers/5e0c343784f24368b690ebb46bdabbea.jpg',
      bookFileUrl: '/10000/df1025ce6785481897d3ca7c5c0f25bd.epub',
      bookSize: '2.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: 'b90d7dc343724d49a920d101288843e4',
      bookTitle: '爱丽丝永恒花园',
      bookAuthors: '七夕八幡, ',
      bookDescription: '称为爱丽丝永恒花园，庭院中却只有一两株野花。名为爱丽丝的哥特萝莉，却已然在这里存在了千年。遵循十规则，交易着人类或美好或丑陋的愿望。白夜，作为爱丽丝钦定的助手，也成为了唯一见证这一切幻与灭的人类。',
      bookCoverUrl: '/10000/covers/5e0c343784f24368b690ebb46bdabbea.jpg',
      bookFileUrl: '/10000/df1025ce6785481897d3ca7c5c0f25bd.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: '1bd87a1147614a86905e8debe89b7ad9',
      bookTitle: '超级纨绔',
      bookAuthors: '左妻右妾, ',
      bookDescription: '简介他，生活在一个恨天高、超短裙的时代，混迹在血与色的江湖；他，无力被赋予茅山传人的使命；他，在拯救世界中顿悟，又在世道轮回中不息；他，以天为衣，席地而坐，成就东方神话！',
      bookCoverUrl: '/10000/covers/4760aae3d416469593923111e8eceee7.jpg',
      bookFileUrl: '/10000/3dc1865f4a5a4eb78fc11a489a22a96a.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: '1bd87a1147614a86905e8debe89b7ad9',
      bookTitle: '超级纨绔',
      bookAuthors: '左妻右妾, ',
      bookDescription: '简介他，生活在一个恨天高、超短裙的时代，混迹在血与色的江湖；他，无力被赋予茅山传人的使命；他，在拯救世界中顿悟，又在世道轮回中不息；他，以天为衣，席地而坐，成就东方神话！',
      bookCoverUrl: '/10000/covers/4760aae3d416469593923111e8eceee7.jpg',
      bookFileUrl: '/10000/3dc1865f4a5a4eb78fc11a489a22a96a.epub',
      bookSize: '14.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: '1bd87a1147614a86905e8debe89b7ad9',
      bookTitle: '超级纨绔',
      bookAuthors: '左妻右妾, ',
      bookDescription: '简介他，生活在一个恨天高、超短裙的时代，混迹在血与色的江湖；他，无力被赋予茅山传人的使命；他，在拯救世界中顿悟，又在世道轮回中不息；他，以天为衣，席地而坐，成就东方神话！',
      bookCoverUrl: '/10000/covers/4760aae3d416469593923111e8eceee7.jpg',
      bookFileUrl: '/10000/3dc1865f4a5a4eb78fc11a489a22a96a.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: '1bd87a1147614a86905e8debe89b7ad9',
      bookTitle: '超级纨绔',
      bookAuthors: '左妻右妾, ',
      bookDescription: '简介他，生活在一个恨天高、超短裙的时代，混迹在血与色的江湖；他，无力被赋予茅山传人的使命；他，在拯救世界中顿悟，又在世道轮回中不息；他，以天为衣，席地而坐，成就东方神话！',
      bookCoverUrl: '/10000/covers/4760aae3d416469593923111e8eceee7.jpg',
      bookFileUrl: '/10000/3dc1865f4a5a4eb78fc11a489a22a96a.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: 'b90d7dc343724d49a920d101288843e4',
      bookTitle: '拜见校长大人',
      bookAuthors: '无火的余灰, ',
      bookDescription: '称为爱丽丝永恒花园，庭院中却只有一两株野花。名为爱丽丝的哥特萝莉，却已然在这里存在了千年。遵循十规则，交易着人类或美好或丑陋的愿望。白夜，作为爱丽丝钦定的助手，也成为了唯一见证这一切幻与灭的人类。',
      bookCoverUrl: '/10000/covers/30aed53c590c428ba454867f04915e1c.jpg',
      bookFileUrl: '/10000/8df91ae7a63445d292024e533667f767.epub',
      bookSize: '780K',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: 'b90d7dc343724d49a920d101288843e4',
      bookTitle: '拜见校长大人',
      bookAuthors: '无火的余灰, ',
      bookDescription: '称为爱丽丝永恒花园，庭院中却只有一两株野花。名为爱丽丝的哥特萝莉，却已然在这里存在了千年。遵循十规则，交易着人类或美好或丑陋的愿望。白夜，作为爱丽丝钦定的助手，也成为了唯一见证这一切幻与灭的人类。',
      bookCoverUrl: '/10000/covers/30aed53c590c428ba454867f04915e1c.jpg',
      bookFileUrl: '/10000/8df91ae7a63445d292024e533667f767.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: 'b90d7dc343724d49a920d101288843e4',
      bookTitle: '拜见校长大人',
      bookAuthors: '无火的余灰, ',
      bookDescription: '称为爱丽丝永恒花园，庭院中却只有一两株野花。名为爱丽丝的哥特萝莉，却已然在这里存在了千年。遵循十规则，交易着人类或美好或丑陋的愿望。白夜，作为爱丽丝钦定的助手，也成为了唯一见证这一切幻与灭的人类。',
      bookCoverUrl: '/10000/covers/30aed53c590c428ba454867f04915e1c.jpg',
      bookFileUrl: '/10000/8df91ae7a63445d292024e533667f767.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: 'b90d7dc343724d49a920d101288843e4',
      bookTitle: '拜见校长大人',
      bookAuthors: '无火的余灰, ',
      bookDescription: '称为爱丽丝永恒花园，庭院中却只有一两株野花。名为爱丽丝的哥特萝莉，却已然在这里存在了千年。遵循十规则，交易着人类或美好或丑陋的愿望。白夜，作为爱丽丝钦定的助手，也成为了唯一见证这一切幻与灭的人类。',
      bookCoverUrl: '/10000/covers/30aed53c590c428ba454867f04915e1c.jpg',
      bookFileUrl: '/10000/8df91ae7a63445d292024e533667f767.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    },
    {
      id: 'b90d7dc343724d49a920d101288843e4',
      bookTitle: '拜见校长大人',
      bookAuthors: '无火的余灰, ',
      bookDescription: '称为爱丽丝永恒花园，庭院中却只有一两株野花。名为爱丽丝的哥特萝莉，却已然在这里存在了千年。遵循十规则，交易着人类或美好或丑陋的愿望。白夜，作为爱丽丝钦定的助手，也成为了唯一见证这一切幻与灭的人类。',
      bookCoverUrl: '/10000/covers/30aed53c590c428ba454867f04915e1c.jpg',
      bookFileUrl: '/10000/8df91ae7a63445d292024e533667f767.epub',
      bookSize: '1.78M',
      bookPushedTime: '2021-03-26 15:20:49'
    }
    ]
    this.ebookLoadingDone = false;
  }

}
