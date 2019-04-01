import React, { Component } from 'react'

export default class AssociationItem extends Component {
    render() {
        //let size = this.props.weight;
        console.log("AssociaionITem render");
        return (
            <div style={{fontSize:this.props.weight/2}}>
                {this.props.word}
            </div>
            // <div style={{fontSize: size}}>
            //     {this.props.word}
            // </div>
        )
    }
}
