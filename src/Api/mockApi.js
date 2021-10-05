import axios from 'axios';

const mockApi = axios.create({
    baseURL: 'https://615475fb2473940017efae88.mockapi.io/fake/project-eshopper/'
});

export default mockApi;