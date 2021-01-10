import RestClient from 'react-native-rest-client';

export default class dhangarGrooms extends RestClient {
    constructor() {
        // Initialize with your base URL
        super('http://fe2759d8ed9d.ngrok.io');
    }
    // Now you can write your own methods easily
    //   login (username, password) {
    //     // Returns a Promise with the response.
    //     return this.POST('/auth', { username, password });
    //   }
    getGroomProfiles() {
        return this.GET('/api/v1/dhangar_brides').then(response => response);
    }

    getProfile(uid) {
        return this.GET(`/api/v1/profile/${uid}`).then(response => response);
    }
};