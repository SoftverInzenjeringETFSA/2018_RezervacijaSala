import React, { Component } from 'react';
import './create-schedule-entry.component.css';

class CreateScheduleEntryComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        semesterList: [],
        h:12,
        min:00,
        
    }
    this.fetchSemesterList = props.fetchSemesterList;
    console.log(this.fetchSemesterList);
  }
  render() {
    return (
      <div>
        <h1>Dodavanje unosa u rasproed</h1>
        <hr/>
            <input type="button" onClick={this.fetchSemesters.bind(this)} value="Daj semestre"/>
        <hr/>

        <div className="schedule-input-field">
            <label>Naziv</label>
            <input type="text"/>
        </div>
        <div className="schedule-input-field">
            <label>Semestar</label>
            
                {this.renderSemesterList()}
            
        </div>
        <div className="schedule-input-field">
            <label>Dan u sedmici</label><br />
            <input type="radio" name="dan_u_sedmici" value="0" /> Ponedjeljak<br />
            <input type="radio" name="dan_u_sedmici" value="0" /> Utorak<br />
            <input type="radio" name="dan_u_sedmici" value="0" /> Srijeda<br />
            <input type="radio" name="dan_u_sedmici" value="0" /> Cetvrtak<br />
            <input type="radio" name="dan_u_sedmici" value="0" /> Petak<br />
            <input type="radio" name="dan_u_sedmici" value="0" /> Subota<br />
            <input type="radio" name="dan_u_sedmici" value="0" /> Nedjelja<br />
        </div>
        <div className="schedule-input-field">
            <label>Vrijeme (h : m)</label>
            <input type="number" min="0" max="23"/>
            <input type="number" min="0" max="59"/>
        </div>
        
      </div>
    );
  }

  renderSemesterList() {
      let list = this.state.semesterList.map((semester) => {
        return <option value={semester._id} key={semester._id}>{semester.name}</option>
    });
    
      return <select>
          {list}
      </select>
  }
  fetchSemesters() {
      console.log(this);
      
    this.fetchSemesterList().then((res) => {
        console.log(res)
        this.setState({semesterList: res});
    })
  }
}

export default CreateScheduleEntryComponent;
