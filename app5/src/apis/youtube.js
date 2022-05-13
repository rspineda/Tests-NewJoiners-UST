import axios from 'axios';

const KEY = 'AIzaSyA7dfb3kDzATmc_Vdt335I1rR9gPDfIE8A'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});