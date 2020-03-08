import axios from 'axios';

import { BaseUrl, token } from '../config/services';

const Api = axios.create({
  baseURL: BaseUrl,
  headers:{
    'Content-Type': 'application/json',
    'trakt-api-version': '2',
    'trakt-api-key': token
  },
  timeout: 10000
});


export default Api;