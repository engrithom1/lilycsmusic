import React, { Component } from 'react'
import YouTube from 'react-youtube';

export default class YoutubePlayer extends Component {

    constructor(props){
        super(props);
    }

    render() {
        var video_id = this.props.video_id
        const opts = {
            height: '300',
            width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 1,
            },
          };
        return (
            <YouTube videoId={video_id} opts={opts} onReady={(event)=>event.target.pauseVideo()} />
        )
    }
}


