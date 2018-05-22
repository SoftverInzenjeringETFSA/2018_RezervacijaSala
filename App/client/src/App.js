import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import DataFetchingService from './utils/data-fetching.service';

import ScheduleContainer from './containers/schedule/schedule.container';
import LoginContainer from './containers/login/login.container';
import HomeContainer from './containers/home/home.container';

class App extends Component {
  constructor(props) {
    super(props);
    this.dataFetchingService = new DataFetchingService();
    // this.dataFetchingService.login();
  }

  renderIfUserIsLoggedIn() {
      // TODO: User auth rendering goes here @Mustafa
      if(true) {
            return <div>
                <Route exact path='/' component={HomeContainer}/>
                <Route path='/schedule' component={ScheduleContainer}/>
            </div>
      } else {
          return <LoginContainer />
      }
  }

  render() {
    return (
        <BrowserRouter>
            <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="#">Rezervacija sala</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Početna</Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Raspored
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to='/schedule'>Pregled svih</Link>
                        <Link className="dropdown-item" to='/schedule/create'>Dodaj novi unos</Link>
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
                {this.renderIfUserIsLoggedIn()}
            </div>
        </BrowserRouter>
    );
  }

}

export default App;
