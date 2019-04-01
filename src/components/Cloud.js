import React, { Component } from 'react';

import WordCloud from 'react-d3-cloud';
const fontSizeMapper = word => Math.log2(word.value) * 5;
// const rotate = word => word.value % 420;
//const rotate = Math.floor(Math.random()*45);
const rotate = 0;

export default class Cloud extends Component {

    render() {

        let data = this.props.associations;


        return (
            <WordCloud
                data={data}
                fontSizeMapper={fontSizeMapper}
                rotate={rotate}
            />
        )
    }
}
