import React, { Component } from 'react';

export default class Lyrics extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.song}</td>
            </tr>
        )
    }
}
