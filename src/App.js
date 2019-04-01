import React, { Component } from 'react';
import SongSearch from './components/SongSearch';
import Associations from './components/Associations';
import './App.css';
import SongResults from './components/SongResults';
import {Container, Row, Col} from 'react-bootstrap';
import {getLyricsBySongId, getSongId, getWordAssociations} from './service/clientService';


class App extends Component {
  constructor() {
    super()

    this.state = {
      artistName: '',
      songName: '',
      songId: '',
      lyrics: '',
      result: '',
      words: false
    }

  } 

  handleClick = (artist, song) => {
      
      getSongId(artist, song)
      .then(response => {
        //console.log("app js:n handleclick response arvo: ", response);
        
        let id = response;
        getLyricsBySongId(id)
          .then(response => {
            //console.log("lyrics response, ", response);
            //console.log("lyrics are: ", response.data.message.body.lyrics.lyrics_body);
            
            let words = response.data.message.body.lyrics.lyrics_body;
           // console.log("words:", words);
           
  
            //let lyricsresponse = response;

            this.setState({
              artistName: artist,
              songName: song,
              songId: id,
              lyrics: response,
              result: '',
              words: false
            })

            this.associations(words);


          })
          .catch(e => {
            //console.log("getLyricsBySongId returns an error");
           // console.log(e);
            this.setState({
              artistName: '',
              result: "Sorry! No lyrics found",
              words: false
            })
          })
        
      })
      .catch(e => {
       // console.log("getSongId returns an error");
       // console.log(e);
        this.setState({
          artistName: '',
          result: "SORRY! No results found",
          words: false
        })
      })

    }
  
  

  associations(words) {
    getWordAssociations(words)
    .then(response => {
     // console.log("Associations response: ", response.data.response[0].items);
      //return response.data.response[0].items;
      this.setState({
        words: true,
        wordList: response.data.response[0].items
      });
    });
  }


  render() {
    let artistName = this.state.artistName;
    //let words = this.state.wordList;
    console.log(this.state);

    return (
     
      <div className="App">
       <div className="App-header">
        <div className="headerTitle">
        
           <h1 className="glow">Lyrics & Associations</h1>
           <a className="btn btn-outline-light btn-lg" href="#appContainer">Get Associations</a>
          
        </div>
      </div>

      <div className="lyricsAndAssociations">

      <Container id="appContainer" className="appContainer">
        <Row>
          <Col className="searchCol" xs={12} md={3}>
            <SongSearch handleClick = {this.handleClick} />
          </Col>
          <Col className="resultCol" xs={12} md={8}>
           {
              this.state.result ?
             <div className="no-result-text">{this.state.result}</div>
             :
             (
               artistName ?
               <SongResults result = {this.state} />
               :
               null
             )
             
           }
           </Col>
          </Row> 
        </Container>    
        
        <Container className="association-container">

            <Row>

            {
              this.state.words ?
               <Associations wordList = {this.state.wordList} />
              :
              null
            }      
            </Row>

          </Container>

      </div>
      

      {/* <div className="Container-Search-Results">
        
           
      </div>
        <div className="Container-Associations">
            
        </div> */}
        
      </div>
    );
  }
}

export default App;
