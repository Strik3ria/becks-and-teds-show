import { Component, OnInit } from '@angular/core';
import { TwitchEmbed, TwitchEmbedOptions } from 'twitch-player';
import { environment } from 'src/environments/environment';
import { TokenService } from '../services/token-service.service';
import axios from 'axios';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss'],
})
export class StreamComponent implements OnInit {
  clientId = environment.TWITCH_CLIENT_ID;
  streamName = 'becksandtedsshow';
  baseStreamAPIUrl = 'https://api.twitch.tv/helix/streams?user_login=';

  bearerToken: any;

  player: any;

  constructor(private tokenService: TokenService) {}

  async ngOnInit() {
    let token_response = await this.tokenService.getToken();
    this.bearerToken = token_response['data']['access_token'];
    let online_response = await this.isOnline();
    let options: TwitchEmbedOptions;

    if (online_response['data']['data'].length === 0) {
      options = {
        width: 768,
        height: 768,
        allowFullscreen: true,
        autoplay: true,
        video: '1264669733',
        parent: ['localhost'],
      };
    } else {
      options = {
        width: 768,
        height: 768,
        allowFullscreen: true,
        autoplay: true,
        channel: this.streamName,
        parent: ['localhost'],
      };
    }

    this.player = new TwitchEmbed('stream', options);
  }

  async isOnline() {
    let fullUrl = `${this.baseStreamAPIUrl}${this.streamName}`;
    let headers = {
      'Client-Id': this.clientId,
      Authorization: 'Bearer ' + this.bearerToken,
    };

    return axios.get(fullUrl, { headers: headers });
  }
}
