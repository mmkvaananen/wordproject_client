import React, { Component } from 'react'

export default class SongItem extends Component {
    render() {
        console.log("this.props.artist: ", this.props.artist);
        console.log("this.props.songTitle, ", this.props.songTitle); 
        return (
            <tr>
                <td>{this.props.artist}</td>
                <td>{this.props.songTitle}</td>
            </tr>
        )
    }
}
