import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LeaderboardService {

  constructor(private http: Http) { }

  getPlayers(): Promise<any> {
    return this.http.get(`/data/leaderboard.json`).toPromise().then(response => response.json());
  }

}
