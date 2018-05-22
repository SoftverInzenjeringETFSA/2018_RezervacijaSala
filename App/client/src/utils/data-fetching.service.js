import axios from 'axios';

export default class DataFetchingService {

    fetchSemesterList() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                  _id:'sadasdqwedwceds',
                  name: "Ljetni semestar 2018",
                  beginsAt: "2018-02-19T23:00:00.000Z",
                  endsAt: "2018-07-20T22:00:00.000Z"
                }
            ])
        })
    }

    login() {
        axios.post('/api/auth/login',{
            user: {
                username:"belmin",
                password:"password"
            }
        })
        .then(response => {
            console.log(response.data);
        })
    }
}