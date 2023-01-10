/*
// Axios  Head request
const axios = require('axios');
async function doHeadRequest() {
  let res = await axios.head('https://checkip.amazonaws.com ');
  console.log(`Status: ${res.status}`)
  console.log(`Server: ${res.headers.server}`)
  console.log(`Date: ${res.headers.date}`)
}
doHeadRequest();
// */

/*
//  Axios status code
const axios = require('axios');
async function makeRequest() {
    const config = {
        method: 'head',
        url: 'https://checkip.amazonaws.com'
    }
    let res = await axios(config)
    console.log(res.status);
}
makeRequest();
// */

/*
// Axios custom header
const axios = require('axios');
async function makeRequest() {
    const config = {
        method: 'get',
        url: 'https://checkip.amazonaws.com',
        headers: { 'User-Agent': 'Axios - console app' }
    }
    let res = await axios(config)
    console.log(res.request._header);
}
makeRequest();
// */

/*
// Axios GET request
const axios = require('axios');
const url = require('url');
async function doGetRequest() {
    let payload = { name: 'John Doe', occupation: 'gardener' };
    const params = new url.URLSearchParams(payload);
    let res = await axios.get(`http://httpbin.org/get?${params}`);
    let data = res.data;
    console.log(data);
}
doGetRequest();
// */

/*
// Github user information
const axios = require('axios');
async function getNumberOfFollowers() {
  let res = await axios.get('https://api.github.com/users/sanjay556');
  let nOfFollowers = res.data.followers;
  let location = res.data.location;
  console.log(`# of followers: ${nOfFollowers}`)
  console.log(`Location: ${location}`)
}
getNumberOfFollowers();
// */

/*
// Axios POST json request
const axios = require('axios');
async function doPostRequest() {
    let payload = { name: 'John Doe', occupation: 'gardener' };
    let res = await axios.post('http://httpbin.org/post', payload);
    let data = res.data;
    console.log(data);
}
doPostRequest();
//  */

/*
// Axios POST form
const axios = require('axios');
const FormData = require('form-data');
async function doPostRequest() {
    const form_data = new FormData();
    form_data.append('name', 'John Doe');
    form_data.append('occupation', 'gardener');
    let res = await axios.post('http://httpbin.org/post', form_data,
        { headers: form_data.getHeaders() });
    let data = res.data;
    console.log(data);
}
doPostRequest();
// */

/*
// Download  image
const axios = require('axios');
const fs = require('fs');
var config = {
    responseType: 'stream'
};
let url = 'https://images.dog.ceo/breeds/setter-english/n02100735_4870.jpg';
async function getImage() {
    let resp = await axios.get(url, config);
    resp.data.pipe(fs.createWriteStream('image.jpg'));
}
getImage();
// */

// Axios multiple requests
const axios = require('axios');
async function doRequests(urls) {
    const fetchUrl = (url) => axios.get(url);
    const promises = urls.map(fetchUrl);
    let responses = await Promise.all(promises);
    responses.forEach(resp => {
        let msg = `${resp.config.url} -> ${resp.headers.server}: ${resp.status}`;
        console.log(msg);
    });
}
let urls = [
    'http://webcode.me',
    'https://example.com'
];
doRequests(urls);
// */
