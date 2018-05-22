import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import ViewAllSchedulesContainer from './view-all-schedules/view-all-schedules.container';
import CreateScheduleContainer from './create-schedule/create-schedule.container';

class ScheduleContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h3>Schedule</h3>
            <ul>
                <li><Link to='/schedule'>All Schedule entries</Link></li>
                <li><Link to='/schedule/create'>Create new schedule entry</Link></li>
            </ul>
            <Switch>
                <Route exact path='/schedule' component={ViewAllSchedulesContainer}/>
                <Route path='/schedule/create' component={CreateScheduleContainer}/>
            </Switch>
        </div>
    }
}

export default ScheduleContainer;