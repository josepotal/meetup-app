import axios from 'axios';

axios.defaults.baseURL = 'https://meetup-backend-josep.herokuapp.com/api';
// axios.defaults.baseURL = 'https://localhost:3001/api';

const fakeGroupId = '5a727894c0675d00292cebf3';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);
    console.log(data);
    return data.meetups;
  }
}
export { MeetupApi };
