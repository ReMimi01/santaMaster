import { Component, OnInit } from '@angular/core';
import { RankingContent } from 'src/app/shared/ranking-content';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss']
})
export class RankingPageComponent implements OnInit {

  rankingContents: RankingContent[] = [
    new RankingContent('Chat','Rémi', 50),
    new RankingContent('Fouine','Sophie', 35),
    new RankingContent('Chat','Hakim', 2),
    new RankingContent('Fouine','André', 100),
    new RankingContent('Chat','Farah', 60),
    new RankingContent('Fouine','Thomas', 78),
 ]

  constructor() { }

  ngOnInit() {
    this.classement();
  }

  classement(){
    this.rankingContents.sort(function(a: RankingContent , b: RankingContent) {
      return b.points - a.points;
    });
  }
}
