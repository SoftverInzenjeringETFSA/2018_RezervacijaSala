import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    axios.get('/api/test')
    .then(response => console.log(response.data))
  }
  render() {
    return (
      <div>
        <h1>Rezervacija sale</h1>
        <h2>Tim 9</h2>
        <p>Open DevTools to check server status.</p>
      </div>
    );
  }
}

export default App;
