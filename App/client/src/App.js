import React, { Component } from 'react';
import DataFetchingService from './utils/data-fetching.service';

import CreateScheduleEntryComponent from './components/create-schedule-entry/create-schedule-entry.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.dataFetchingService = new DataFetchingService();
    this.dataFetchingService.login();
  }
  render() {
    return (
      <div>
        <h1>Rezervacija sale</h1>
        <h2>Tim 9</h2>
        <p>Open DevTools to check server status.</p>
        <hr/>
        <CreateScheduleEntryComponent  fetchSemesterList={this.dataFetchingService.fetchSemesterList}/>
      </div>
    );
  }

}

export default App;
