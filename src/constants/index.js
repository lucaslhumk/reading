import axios from 'axios';

export const API_DB = axios.create({
    baseURL: 'http://localhost:3333/'
})

export const API_GOOGLE = "https://www.googleapis.com/books/v1/volumes";