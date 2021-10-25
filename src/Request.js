import axios from 'axios';

const settings = require('./config/general.json');
/*
const settings = {
    "env": "stg",
    "base_url": "https://api.recruitment.4soft.tech/"
};
*/

export function getRequest(url, data) {
    return axios({
        method: 'get',
        url: settings.base_url + url,
        data
    }).then((request) => request.data);
}