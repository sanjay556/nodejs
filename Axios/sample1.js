/*

// this does not work 
const axios = require('axios');
async function doGetRequest() {
    let host = 'squidproxy';
    let port = 8080;
    const res = await axios.get('https://checkip.amazonaws.com/', {
        proxy: {
            host: host,
            port: port
        }
    });
    console.log(res.data);
}
doGetRequest();
//  */



/*
// this works with os http_proxy and https_proxy variable 
const axios = require('axios');
async function doGetRequest() {

  let res = await axios.get('https://checkip.amazonaws.com/');

  let data = res.data;
  console.log(data);
}

doGetRequest();
//  */


// this works with os http_proxy and https_proxy variable 
const axios = require('axios');
axios.get('https://checkip.amazonaws.com/').then(resp => {
    console.log(resp.data);
});
//  */



