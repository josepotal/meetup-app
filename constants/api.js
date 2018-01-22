import axios from 'axios';

axios.defaults.baseURL = 'https://beer-backend.herokuapp.com/api';

const fakeGroupId = '5a64eb552b5e210029b260ac';

class MeetupApi {
  constructor() {
    this.groupId = fakeGroupId;
    this.path = `/groups/${this.groupId}/meetups`;
  }

  async fetchGroupMeetups() {
    const { data } = await axios.get(this.path);
    return data.meetups;
  }
}
export { MeetupApi };
