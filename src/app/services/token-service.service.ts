import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';

interface AccessResponse {
  access_token: string;
  expires_in: number;
  token_type: string;
}

@Injectable()
export class TokenService {
  clientId = environment.TWITCH_CLIENT_ID;
  clientSecret = environment.TWITCH_CLIENT_SECRET;

  getToken() {
    let baseTokenUrl = 'https://id.twitch.tv/oauth2/token';
    let token_body = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'client_credentials',
    };

    return axios.post<AccessResponse>(baseTokenUrl, token_body);
  }
}
