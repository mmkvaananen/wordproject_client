import React, { Component } from 'react';
import {Form, Col, Row} from 'react-bootstrap';
import './songsearch.css';

export default class SongSearch extends Component {

    constructor(props){
        super(props)

        this.state = {
            formArtistName: '',
            formSongTitle: '',
            validated: false
        }
        this.updateFormArtistName = this.updateFormArtistName.bind(this);
        this.updateFormSongTitle = this.updateFormSongTitle.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateFormArtistName(e) {
        this.setState({
            formArtistName: e.target.value 
        })
    }
    updateFormSongTitle(e) {
        this.setState({
            formSongTitle: e.target.value
        })
    }

    handleClick(e) {
        e.preventDefault();

        //console.log("SongSearch button click handler");
        this.setState({formArtistName: '', formSongTitle: '', validated: true});

        this.props.handleClick(this.state.formArtistName, this.state.formSongTitle);
        
    }

    render() {
        return (

            <Form>
                <Row>
                    <Col>
                    <Form.Control required className="songSearchInput" as="input" placeholder="Enter artist name" value = {this.state.formArtistName} onChange={this.updateFormArtistName} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form.Control required className="songSearchInput" as="input" placeholder="Song title" value = {this.state.formSongTitle} onChange={this.updateFormSongTitle} />
                    </Col>
                </Row>
                <Row>
                <Col>
                    <button className="btn btn-outline-light btn-lg" type="submit" onClick={this.handleClick}>Search</button>
                </Col>
                </Row>
            </Form>

        )
    }
}
