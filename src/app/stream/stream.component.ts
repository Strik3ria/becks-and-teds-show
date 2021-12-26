import { Component, OnInit } from '@angular/core';
import { TwitchEmbed } from 'twitch-player';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {
  player: any;
  options = {
    width: 768,
    height: 768,
    allowFullscreen: true,
    autoplay: true,
    channel: "becksandtedsshow",
    parent: ["localhost"]
  };

  constructor() { }

  ngOnInit(): void {
      this.player = new TwitchEmbed('stream', this.options);
  }

}
