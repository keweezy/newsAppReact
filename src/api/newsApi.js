import axios from 'axios';

const token = 'f735b8d472c0412f9964bdd7242d05c9';
export default axios.create({
    baseURL: 'http://newsapi.org',
    headers: {
        Authorization: `Basic ${token}`,
      }
});