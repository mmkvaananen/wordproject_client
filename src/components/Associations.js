import React, { Component } from 'react';
// import AssociationItem from './AssociationItem';
// import {getWordAssociations} from '../service/clientService';
import Cloud from './Cloud';
export default class Associations extends Component {

    // constructor() {
    //     super()

    //     this.state = {
    //         //wordList: this.props.wordList,
    //         words: [] 
    //     }

    // }

    // componentDidMount() {
    //     console.log("Olen component did mount");
    //     this.getAssociations(this.props.wordList);
    // }

    // getAssociations(words) {
    //     console.log("olen getAssociations");
    //     getWordAssociations(words)
        
    //         .then( response => {
    //             console.log("olen getWordAssociations vastaus, ", response);
    //             this.setState({
    //                 words: response.data.response[0].items
    //             })
    //         })
    // }

    // componentDidMount() {
    //     setInterval(() => {
    //       this.forceUpdate();
    //     }, 3000);
    //   }
    render() {
        console.log("Associations render");
        let datalist = [];
        //console.log("wordList, ", this.props.wordList);
        // let item = this.props.wordList[0].item;
        // console.log("item, ", this.props.wordList[0].item);
       
        // let items = this.props.wordList.map((value, index) => {
        //        // console.log("Map word, ", value.item);
        //        // console.log("Map weight, ", value.weight);
        //         datalist.push({text: value.item, value: value.weight});
        //         return (<AssociationItem key={index} word={value.item} weight= {value.weight} />);
        //         //return (<div key = {index}>{value.item}</div>)
                
        //     });
        this.props.wordList.map((value, index) => { return datalist.push({text: value.item, value: value.weight});});
        
        return (
          <section className="associationsCloud">
            {/* <h1>Word Cloud of Associations</h1> */}
            <Cloud associations = {datalist} />
          </section>
            
        )
    }
}
