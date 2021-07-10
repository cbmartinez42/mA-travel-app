const axios = require('axios')

export default {
    browseAllActivities: function(){
        // const infoUrl = '/api/tours';
        // return fetch(infoUrl)
        return axios.get('/api/tour');

    },
    browseCategory: function(){
        const infoUrl = '/api/tour';
        return fetch(infoUrl);

    },
    searchAllActivities: function(){
        const infoUrl = '/api/tour';
        return fetch(infoUrl);
    },
    findOneActivity: function(id){
        // const infoUrl = '/api/tours/' + id;
        return axios.get('/api/tour/' + id);

    },
    signUpUser: function(newUserInfo){
        console.log('signUpUser was called from utils/API.js w/this payload:',newUserInfo);
        return axios.post('/api/user', newUserInfo);
    },
    browseAllUsers: function(){
        return axios.get('/api/user');
    }
};
