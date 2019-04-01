import React, { Component } from 'react';
// import {Table} from 'react-bootstrap';
// import SongItem from './SongItem';
// import Lyrics from './Lyrics';

export default class SongResults extends Component {
    render() {
        let lyricsText = this.props.result.lyrics.data.message.body.lyrics.lyrics_body;
        //console.log("lyricsText: ", lyricsText)
        if (lyricsText ==="") {
            lyricsText = "No lyrics available..."
        }

        //let song = <SongItem artist = {this.props.result.artistName} songTitle={this.props.result.songName}/>
         
        //let lyrics = <Lyrics song={lyricsText} /> 

        return (
            <div className="songResultDiv">
            <section>
                <h2>{this.props.result.songName}</h2>
                <h3>{this.props.result.artistName}</h3>
            </section>
            <section>
                <div className="lyricsText">{lyricsText}</div>
            </section>
            </div>

       

        )
    }
}
