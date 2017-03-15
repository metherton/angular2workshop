import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  getPlayer(playerId: number): Promise<any> {
    return this.http.get(`/data/player/${playerId}.json`).toPromise().then(response => response.json());
  }

}
