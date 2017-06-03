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
  public greeting = this.leaderboardService.getToken().then(token => this.leaderboardService.getGreeting(token)).then( gr => this.greeting = gr);


  constructor(private leaderboardService: LeaderboardService, private playerService: PlayerService) { }

  ngOnInit() {

    this.players = this.leaderboardService.getPlayers()
      .then(leaderboard => leaderboard.map(r => this.playerService.getPlayer(r)))
      .then(players => Promise.all(players));


  }


}
