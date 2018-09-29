import axios from 'axios';
const instance = axios.create({
    baseURL:'https://producto-d6c68.firebaseio.com/'
});
export default instance;