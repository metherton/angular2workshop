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
  public greeting = this.leaderboardService.getGreeting('dd').map(response => response.json()).map(g => g.content);


  constructor(private leaderboardService: LeaderboardService, private playerService: PlayerService) { }

  ngOnInit() {

    this.players = this.leaderboardService.getPlayers()
      .then(leaderboard => leaderboard.map(r => this.playerService.getPlayer(r)))
      .then(players => Promise.all(players));


  }


}
