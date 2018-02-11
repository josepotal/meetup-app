import axios from 'axios';
import { Platform } from 'react-native';

axios.defaults.baseURL = 'https://meetup-backend-josep.herokuapp.com/api';
// axios.defaults.baseURL = 'https://localhost:3001/api';

let url;
if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3000/api';
} else {
  url = 'http://localhost:3000/api';
}

// axios.defaults.baseURL = url;

const fakeGroupId = '5a727894c0675d00292cebf3';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    try {
      const { data } = await axios.get(this.path);
      return data.meetups;
    } catch (e) {
      console.log(e);
    }
  }

  async createGroupMeetups(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  }
}
export { MeetupApi };
