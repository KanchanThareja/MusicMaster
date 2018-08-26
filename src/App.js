import React, { Component } from 'react';
import './App.css';
import Profile from './profile';
import Gallery from './gallery';
import { FormGroup, Input, InputGroup } from 'reactstrap';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: '',
      artist: null,
      arr: []
    }
  }

  search() {
    const URL = `https://itunes.apple.com/search?media=music&term=${this.state.query}`;

    fetch(URL, {
      method: 'GET'
    }).then(response => response.json())
    .then(data => {
      const artists = data.results;
      this.setState({arr: artists});
      artists.map((artist) => {
        this.setState({artist});
      });
    })
  }
  render(){
    return(
    <div className="App">
      <div className="App-title">
        <i className="fa fa-music"></i>
        Music Master
      </div>
      <FormGroup className="fg row col-12">
      <div className="col-3"></div>
      <InputGroup className="col-6">
        <Input type="text" className="inp" placeholder="Search for an artist..." value={this.state.query}
        onChange={event => this.setState({query: event.target.value})} onKeyPress={event => {
          if(event.key === 'Enter')
          this.search();
        }}/>

        <button className="btn btn-secondary" onClick={() => this.search()}><i className="fa fa-search"></i></button>
      </InputGroup>
      <div className="col-3"></div>
      </FormGroup>
      <Profile artist={this.state.artist} />
      <Gallery tracks={this.state.arr} />
      <div className="footer">Made With <i className="fab fa-react fa-spin"></i> ReactJS</div>
    </div>
    );
  }

}

export default App;
