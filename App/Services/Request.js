var queryString = require('query-string');

var X_AVOSCloud_Application_Id='holwvpb1kgm6eu90z58hqbo7e3kxkd4ciijy3mx9ly8kbyg8';
var X_AVOSCloud_Application_Key ='g3pf70rqpnqaliv13f63rzsy8acay447xsz5llkgfj5pahs7';
var request = {}

request.get = function (url, params) {
    let fetchOptions = {
        method: 'GET',
        headers: {
            'X-AVOSCloud-Application-Id': X_AVOSCloud_Application_Id,
            'X-AVOSCloud-Application-Key': X_AVOSCloud_Application_Key 
        }
    }
    if (params) {
        url += '?' + queryString.stringify(params)
    }
    return fetch(url,fetchOptions)
        .then((response) => response.json())
      
}

request.getWithToken = function (url, params) {
    let fetchOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
    if (params) {
        url += '?' + queryString.stringify(params)
    }
    return fetch(url,fetchOptions)
        .then(res=>res.json())
}

request.post = function (url, body) {
    let fetchOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }

    return fetch(url, fetchOptions)
        .then(res=>res.json())
}


module.exports = request