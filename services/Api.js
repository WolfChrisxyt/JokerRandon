import axios from "axios";

const api = axios.create({
    baseURL:'https://official-joke-api.appspot.com/random_joke' 
});

export default api;