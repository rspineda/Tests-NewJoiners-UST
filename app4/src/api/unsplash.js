import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kBddetIbfmNj8Px89DsIQ52KCVAR9UONWirPk9KHJUc'
    }

});