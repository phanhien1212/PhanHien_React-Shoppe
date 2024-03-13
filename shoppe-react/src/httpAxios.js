import axios from "axios";
const httpAxios = axios.create({
    baseURL:'http://localhost/',
    headers:{'X-Custom-Header':'foobar'}
});
 
export default httpAxios;