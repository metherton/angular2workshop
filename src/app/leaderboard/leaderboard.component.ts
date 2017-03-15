import { Component, OnInit } from '@angular/core';
import {LeaderboardService} from './leaderboard.service'
import {PlayerService} from './player.service'


@Component({
  selector: 'app-leaderboard',
  providers: [LeaderboardService, PlayerService],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  public players: Promise<any[]>;

  constructor(private leaderboardService: LeaderboardService, private playerService: PlayerService) { }

  ngOnInit() {

    this.players = this.leaderboardService.getPlayers()
      .then(leaderboard => leaderboard.map(r => this.playerService.getPlayer(r)))
      .then(players => Promise.all(players));
  // .then(firstResult => Promise.all(firstResult.map(r => this.playerService.getPlayer(r))));

  }

}
