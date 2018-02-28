import axios from 'axios';
import { Platform } from 'react-native';

//axios.defaults.baseURL = 'https://meetup-backend-josep.herokuapp.com/api';
//axios.defaults.baseURL = 'http://localhost:3001/api';

let url;
if (Platform.OS !== 'ios') {
  url = 'http://10.0.3.2:3001/api';
} else {
  url = 'http://localhost:3001/api';
}

axios.defaults.baseURL = url;

const fakeGroupId = '5a942e334eb17e824e30b6ad';

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
      throw e;
    }
  }

  async createGroupMeetups(args) {
    try {
      const res = await axios.post(`${this.path}/new`, { ...args });
      return res;
    } catch (e) {
      throw e;
    }
  }
}
export { MeetupApi };

class UserApi {
  constructor() {
    this.path = '/users';
  }

  async login(args) {
    try {
      const { data } = await axios.post(`${this.path}/auth0`, args);
      return data;
    } catch (e) {
      throw e;
    }
  }

  // async logout() {
  //   try {
  //     const { data } = await axios.post(`${this.path}/auth0`, args);
  //     return data;
  //   } catch (e) {
  //     throw e;
  //   }
  //}
}

export const User = new UserApi();
